const { faker } = require("@faker-js/faker");

const ORDER_COUNTS = {
    small: 500,
    medium: 5000,
    large: 50000
};

const MAX_ITEMS_PER_ORDER = 5;

const MAX_QUANTITY_PER_ITEM = 5;

// ------------------------------------------------------------
// Generate one order
// ------------------------------------------------------------

function generateOrder(
    orderNumber,
    users,
    products
) {
    if (!users.length) {
        throw new Error(
            "Cannot generate orders without users."
        );
    }

    if (!products.length) {
        throw new Error(
            "Cannot generate orders without products."
        );
    }

    // --------------------------------------------------------
    // Only products with stock can be ordered
    // --------------------------------------------------------

    const availableProducts =
        products.filter(
            product =>
                Number(product.stock_quantity) > 0
        );

    if (!availableProducts.length) {
        throw new Error(
            "Cannot generate orders because no products have stock."
        );
    }

    const user =
        faker.helpers.arrayElement(users);

    const itemCount = faker.number.int({
        min: 1,
        max: Math.min(
            MAX_ITEMS_PER_ORDER,
            availableProducts.length
        )
    });

    const shuffledProducts =
        faker.helpers.shuffle(
            availableProducts
        );

    const selectedProducts =
        shuffledProducts.slice(
            0,
            itemCount
        );

    const items = [];

    let totalAmount = 0;

    for (const product of selectedProducts) {
        const availableStock =
            Number(product.stock_quantity);

        const quantity =
            faker.number.int({
                min: 1,
                max: Math.min(
                    MAX_QUANTITY_PER_ITEM,
                    availableStock
                )
            });

        const unitPrice =
            Number(product.price);

        const subtotal =
            Number(
                (
                    unitPrice *
                    quantity
                ).toFixed(2)
            );

        totalAmount += subtotal;

        items.push({
            product_code: product.code,
            quantity,
            unit_price: unitPrice,
            subtotal
        });
    }

    const orderCode =
        `ORD${String(orderNumber).padStart(7, "0")}`;

    const statuses = [
        "PENDING",
        "CONFIRMED",
        "COMPLETED",
        "CANCELLED"
    ];

    const status =
        faker.helpers.arrayElement(
            statuses
        );

    const createdAt =
        faker.date.between({
            from: "2025-01-01T00:00:00.000Z",
            to: "2026-09-30T23:59:59.999Z"
        });

    return {
        code: orderCode,

        user_code: user.code,

        status,

        total_amount:
            Number(
                totalAmount.toFixed(2)
            ),

        created_at:
            createdAt.toISOString(),

        items
    };
}

// ------------------------------------------------------------
// Generate orders for a dataset
// ------------------------------------------------------------

function generateOrders(
    datasetName,
    users,
    products,
    seed = 20260917
) {
    const count =
        ORDER_COUNTS[datasetName];

    if (!count) {
        throw new Error(
            `Unknown dataset: ${datasetName}`
        );
    }

    faker.seed(seed);

    const orders = [];

    for (
        let i = 1;
        i <= count;
        i++
    ) {
        orders.push(
            generateOrder(
                i,
                users,
                products
            )
        );
    }

    return orders;
}

module.exports = {
    ORDER_COUNTS,
    MAX_ITEMS_PER_ORDER,
    MAX_QUANTITY_PER_ITEM,
    generateOrder,
    generateOrders
};