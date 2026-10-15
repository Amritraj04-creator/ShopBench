
require("dotenv").config({
    path: require("path").join(__dirname, "../backend/.env")
});

const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");
const { parse } = require("csv-parse/sync");

const pool = new Pool({
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT || 5432),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
});

const datasetName = process.argv[2] || "small";

const allowedDatasets = new Set([
    "small",
    "medium",
    "large"
]);

if (!allowedDatasets.has(datasetName)) {
    throw new Error(
        "Dataset must be small, medium, or large."
    );
}

const dataDirectory = path.join(
    __dirname,
    "output",
    datasetName
);

function readJson(filename) {
    return JSON.parse(
        fs.readFileSync(
            path.join(dataDirectory, filename),
            "utf8"
        )
    );
}

function readCsv(filename) {
    return parse(
        fs.readFileSync(
            path.join(dataDirectory, filename),
            "utf8"
        ),
        {
            columns: true,
            skip_empty_lines: true,
            bom: true
        }
    );
}

function requireValue(value, description) {
    if (value === undefined || value === null || value === "") {
        throw new Error(`Missing ${description}`);
    }

    return value;
}

async function loadDataset() {
    const categories = readJson("categories.json");
    const brands = readJson("brands.json");
    const suppliers = readJson("suppliers.json");

    const users = readCsv("users.csv");
    const products = readCsv("products.csv");
    const orders = readCsv("orders.csv");
    const orderItems = readCsv("order_items.csv");

    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        // This loader is intended for an empty database.
        // Refuse to merge datasets accidentally.
        const existing = await client.query(`
            SELECT
                (SELECT COUNT(*) FROM roles) AS roles,
                (SELECT COUNT(*) FROM categories) AS categories,
                (SELECT COUNT(*) FROM brands) AS brands,
                (SELECT COUNT(*) FROM suppliers) AS suppliers,
                (SELECT COUNT(*) FROM users) AS users,
                (SELECT COUNT(*) FROM products) AS products,
                (SELECT COUNT(*) FROM orders) AS orders,
                (SELECT COUNT(*) FROM order_items) AS order_items
        `);

        const counts = existing.rows[0];

        const nonEmptyTables = Object.entries(counts)
            .filter(([, count]) => Number(count) !== 0)
            .map(([table]) => table);

        if (nonEmptyTables.length > 0) {
            throw new Error(
                `Refusing to import into non-empty tables: ${nonEmptyTables.join(", ")}`
            );
        }

        // 1. Roles
        const roleDefinitions = [
            {
                name: "CUSTOMER",
                description: "Customer account"
            },
            {
                name: "STAFF",
                description: "Staff account"
            },
            {
                name: "ADMIN",
                description: "Administrator account"
            }
        ];

        const roleIds = {};

        for (const role of roleDefinitions) {
            const result = await client.query(
                `INSERT INTO roles (name, description)
                 VALUES ($1, $2)
                 RETURNING id`,
                [role.name, role.description]
            );

            roleIds[role.name] = Number(result.rows[0].id);
        }

        // 2. Categories
        const categoryIds = {};

        for (const category of categories) {
            const result = await client.query(
                `INSERT INTO categories (name, description, image_path)
                 VALUES ($1, $2, $3)
                 RETURNING id`,
                [
                    category.name,
                    category.description || null,
                    category.image_path || null
                ]
            );

            categoryIds[category.code] = Number(result.rows[0].id);
        }

        // 3. Brands
        const brandIds = {};

        for (const brand of brands) {
            const result = await client.query(
                `INSERT INTO brands (name, description, logo_path)
                 VALUES ($1, $2, $3)
                 RETURNING id`,
                [
                    brand.name,
                    brand.description || null,
                    brand.logo_path || null
                ]
            );

            brandIds[brand.code] = Number(result.rows[0].id);
        }

        // 4. Suppliers
        const supplierIds = {};

        for (const supplier of suppliers) {
            const result = await client.query(
                `INSERT INTO suppliers
                    (name, email, phone, address, logo_path)
                 VALUES ($1, $2, $3, $4, $5)
                 RETURNING id`,
                [
                    supplier.name,
                    supplier.email || null,
                    supplier.phone || null,
                    supplier.address || null,
                    supplier.logo_path || null
                ]
            );

            supplierIds[supplier.code] = Number(result.rows[0].id);
        }

        // 5. Users
        const userIds = {};

        for (const user of users) {
            const roleId = roleIds[requireValue(
                user.role_name,
                `role name for ${user.code}`
            )];

            if (!roleId) {
                throw new Error(
                    `Unknown role ${user.role_name} for ${user.code}`
                );
            }

            const fullName = [
                user.first_name,
                user.last_name
            ].filter(Boolean).join(" ");

            const result = await client.query(
                `INSERT INTO users
                    (role_id, name, email, password_hash)
                 VALUES ($1, $2, $3, $4)
                 RETURNING id`,
                [
                    roleId,
                    requireValue(fullName, `name for ${user.code}`),
                    requireValue(user.email, `email for ${user.code}`),
                    requireValue(user.password_hash, `password hash for ${user.code}`)
                ]
            );

            userIds[user.code] = Number(result.rows[0].id);
        }

        // 6. Products
        const productIds = {};

        for (const product of products) {
            const categoryId = categoryIds[product.category_code];
            const brandId = brandIds[product.brand_code];
            const supplierId = supplierIds[product.supplier_code];

            if (!categoryId || !brandId || !supplierId) {
                throw new Error(
                    `Invalid category, brand, or supplier code for ${product.code}`
                );
            }

            const result = await client.query(
                `INSERT INTO products
                    (
                        category_id,
                        brand_id,
                        supplier_id,
                        name,
                        description,
                        price,
                        stock_quantity,
                        is_active,
                        image_path,
                        attributes
                    )
                 VALUES ($1, $2, $3, $4, $5, $6, $7, TRUE, $8, $9::jsonb)
                 RETURNING id`,
                [
                    categoryId,
                    brandId,
                    supplierId,
                    product.name,
                    product.description,
                    Number(product.price),
                    Number(product.stock_quantity),
                    product.image_path || null,
                    product.attributes || "{}"
                ]
            );

            productIds[product.code] = Number(result.rows[0].id);
        }

        // 7. Orders
        const orderIds = {};

        for (const order of orders) {
            const userId = userIds[order.user_code];

            if (!userId) {
                throw new Error(
                    `Unknown user ${order.user_code} for ${order.code}`
                );
            }

            const result = await client.query(
                `INSERT INTO orders
                    (user_id, status, total_amount, created_at)
                 VALUES ($1, $2, $3, $4)
                 RETURNING id`,
                [
                    userId,
                    order.status,
                    Number(order.total_amount),
                    order.created_at
                ]
            );

            orderIds[order.code] = Number(result.rows[0].id);
        }

        // 8. Order items
        for (const item of orderItems) {
            const orderId = orderIds[item.order_code];
            const productId = productIds[item.product_code];

            if (!orderId || !productId) {
                throw new Error(
                    `Invalid order or product code in order_items.csv`
                );
            }

            await client.query(
                `INSERT INTO order_items
                    (order_id, product_id, quantity, unit_price)
                 VALUES ($1, $2, $3, $4)`,
                [
                    orderId,
                    productId,
                    Number(item.quantity),
                    Number(item.unit_price)
                ]
            );
        }

        // 9. Verify imported counts inside the transaction
        const verification = await client.query(`
            SELECT
                (SELECT COUNT(*) FROM roles) AS roles,
                (SELECT COUNT(*) FROM categories) AS categories,
                (SELECT COUNT(*) FROM brands) AS brands,
                (SELECT COUNT(*) FROM suppliers) AS suppliers,
                (SELECT COUNT(*) FROM users) AS users,
                (SELECT COUNT(*) FROM products) AS products,
                (SELECT COUNT(*) FROM orders) AS orders,
                (SELECT COUNT(*) FROM order_items) AS order_items
        `);

        const actual = verification.rows[0];

        const expected = {
            roles: 3,
            categories: categories.length,
            brands: brands.length,
            suppliers: suppliers.length,
            users: users.length,
            products: products.length,
            orders: orders.length,
            order_items: orderItems.length
        };

        for (const [table, expectedCount] of Object.entries(expected)) {
            if (Number(actual[table]) !== expectedCount) {
                throw new Error(
                    `Count mismatch for ${table}: expected ${expectedCount}, got ${actual[table]}`
                );
            }
        }

        await client.query("COMMIT");

        console.log(`\nDataset "${datasetName}" imported successfully.`);
        console.table(
            Object.entries(expected).map(([table, count]) => ({
                table,
                imported_rows: count
            }))
        );
    } catch (error) {
        await client.query("ROLLBACK");
        console.error("Import failed; transaction rolled back.");
        throw error;
    } finally {
        client.release();
    }
}

loadDataset()
    .catch(error => {
        console.error(error.message);
        process.exitCode = 1;
    })
    .finally(async () => {
        await pool.end();
    });
