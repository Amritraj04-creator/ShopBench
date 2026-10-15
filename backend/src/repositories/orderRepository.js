const pool = require("../config/database");

async function createOrder(userId, items) {
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        // 1. Check whether the user exists
        const userResult = await client.query(
            `
            SELECT id
            FROM users
            WHERE id = $1;
            `,
            [userId]
        );

        if (userResult.rows.length === 0) {
            throw new Error("User not found");
        }

        // 2. Extract all requested product IDs
        const productIds = items.map(
            item => item.product_id
        );

        // 3. Fetch and lock all requested products
        const productResult = await client.query(
            `
            SELECT
                id,
                price,
                stock_quantity,
                is_active
            FROM products
            WHERE id = ANY($1::bigint[])
            FOR UPDATE;
            `,
            [productIds]
        );

        // 4. Create product lookup map
        const productsById = new Map(
            productResult.rows.map(product => [
                Number(product.id),
                product
            ])
        );

        // 5. Validate every requested product
        const validatedItems = [];

        for (const item of items) {
            const product = productsById.get(
                item.product_id
            );

            if (!product) {
                throw new Error(
                    `Product ${item.product_id} not found`
                );
            }

            if (!product.is_active) {
                throw new Error(
                    `Product ${item.product_id} is inactive`
                );
            }

            if (
                product.stock_quantity <
                item.quantity
            ) {
                throw new Error(
                    `Insufficient stock for product ${item.product_id}`
                );
            }

            validatedItems.push({
                product_id: product.id,
                quantity: item.quantity,
                unit_price: Number(product.price)
            });
        }

        // 6. Calculate total amount
        const totalAmount = validatedItems.reduce(
            (total, item) => {
                return total + (
                    item.unit_price * item.quantity
                );
            },
            0
        );

        // 7. Create the order
        const orderResult = await client.query(
            `
            INSERT INTO orders (
                user_id,
                status,
                total_amount
            )
            VALUES ($1, $2, $3)
            RETURNING
                id,
                user_id,
                status,
                total_amount,
                created_at;
            `,
            [
                userId,
                "PENDING",
                totalAmount
            ]
        );

        const order = orderResult.rows[0];

        // 8. Create order items
        for (const item of validatedItems) {
            await client.query(
                `
                INSERT INTO order_items (
                    order_id,
                    product_id,
                    quantity,
                    unit_price
                )
                VALUES ($1, $2, $3, $4);
                `,
                [
                    order.id,
                    item.product_id,
                    item.quantity,
                    item.unit_price
                ]
            );
        }

        // 9. Reduce product stock
        for (const item of validatedItems) {
            await client.query(
                `
                UPDATE products
                SET stock_quantity =
                    stock_quantity - $1
                WHERE id = $2;
                `,
                [
                    item.quantity,
                    item.product_id
                ]
            );
        }

        // 10. Commit the complete transaction
        await client.query("COMMIT");

        return {
            message: "Order created successfully",
            order,
            items: validatedItems
        };
    } catch (error) {
        // Undo every database change made
        // during this transaction.
        await client.query("ROLLBACK");

        throw error;
    } finally {
        // Return the connection to the pool.
        client.release();
    }
}

async function getOrderById(
    orderId,
    userId
) {
    const orderResult = await pool.query(
        `
        SELECT
            o.id,
            o.user_id,
            o.status,
            o.total_amount,
            o.created_at,
            o.updated_at
        FROM orders o
        WHERE o.id = $1
        AND o.user_id = $2;
        `,
        [
            orderId,
            userId
        ]
    );

    if (orderResult.rows.length === 0) {
        return null;
    }

    const order = orderResult.rows[0];

    const itemsResult = await pool.query(
        `
        SELECT
            oi.id,
            oi.product_id,
            p.name AS product_name,
            oi.quantity,
            oi.unit_price
        FROM order_items oi
        JOIN products p
            ON oi.product_id = p.id
        WHERE oi.order_id = $1
        ORDER BY oi.id;
        `,
        [orderId]
    );

    return {
        ...order,
        items: itemsResult.rows
    };
}

async function getOrdersByUser(userId, page = 1, limit = 20) {
    const offset = (page - 1) * limit;

    const result = await pool.query(
        `
        SELECT
            id,
            user_id,
            status,
            total_amount,
            created_at,
            updated_at
        FROM orders
        WHERE user_id = $1
        ORDER BY created_at DESC
        LIMIT $2
        OFFSET $3;
        `,
        [
            userId,
            limit,
            offset
        ]
    );

    return result.rows;
}

module.exports = {
    createOrder,
    getOrderById,
    getOrdersByUser
};