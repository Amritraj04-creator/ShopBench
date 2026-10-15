const fs = require("fs");
const path = require("path");

const {
    CATEGORIES
} = require("./generators/catalog");

const {
    BRANDS
} = require("./generators/brands");

const {
    SUPPLIERS
} = require("./generators/suppliers");

const {
    initializeFaker,
    generateProduct
} = require("./generators/productGenerator");

const {
    USER_COUNTS,
    BENCHMARK_USERS,
    GENERATED_USER_PASSWORD,
    generateUsers
} = require("./generators/userGenerator");

const {
    ORDER_COUNTS,
    generateOrders
} = require("./generators/orderGenerator");

const {
    validateDataset
} = require("./generators/validator");

// ------------------------------------------------------------
// Dataset configuration
// ------------------------------------------------------------

const DATASET_CONFIG = {
    small: {
        productCount: 1000,
        userCount: 100,
        orderCount: 500
    },

    medium: {
        productCount: 10000,
        userCount: 1000,
        orderCount: 5000
    },

    large: {
        productCount: 100000,
        userCount: 10000,
        orderCount: 50000
    }
};

// ------------------------------------------------------------
// Paths
// ------------------------------------------------------------

const DATASET_ROOT =
    path.join(
        __dirname,
        "output"
    );

// ------------------------------------------------------------
// CSV escaping
// ------------------------------------------------------------

function escapeCsvValue(value) {
    if (value === null ||
        value === undefined) {
        return "";
    }

    const stringValue =
        String(value);

    if (
        stringValue.includes(",") ||
        stringValue.includes("\"") ||
        stringValue.includes("\n")
    ) {
        return `"${stringValue.replace(
            /"/g,
            "\"\""
        )}"`;
    }

    return stringValue;
}

// ------------------------------------------------------------
// Write CSV
// ------------------------------------------------------------

function writeCsv(
    filePath,
    rows
) {
    if (!rows.length) {
        fs.writeFileSync(
            filePath,
            ""
        );

        return;
    }

    const headers =
        Object.keys(rows[0]);

    const lines = [];

    lines.push(
        headers
            .map(escapeCsvValue)
            .join(",")
    );

    for (const row of rows) {
        lines.push(
            headers
                .map(
                    header =>
                        escapeCsvValue(
                            row[header]
                        )
                )
                .join(",")
        );
    }

    fs.writeFileSync(
        filePath,
        lines.join("\n"),
        "utf8"
    );
}

// ------------------------------------------------------------
// Write JSON
// ------------------------------------------------------------

function writeJson(
    filePath,
    data
) {
    fs.writeFileSync(
        filePath,
        JSON.stringify(
            data,
            null,
            2
        ),
        "utf8"
    );
}

// ------------------------------------------------------------
// Generate products
// ------------------------------------------------------------

function generateProducts(
    datasetName,
    count
) {
    const productTypes =
        CATEGORIES.flatMap(
            category =>
                category.productTypes
        );

    const products = [];

    for (
        let productNumber = 1;
        productNumber <= count;
        productNumber++
    ) {
        const productType =
            productTypes[
                (productNumber - 1) %
                productTypes.length
            ];

        products.push(
            generateProduct(
                productNumber,
                productType,
                datasetName
            )
        );
    }

    return products;
}

// ------------------------------------------------------------
// Generate credentials file
// ------------------------------------------------------------

function generateCredentials(
    users
) {
    return users.map(
        user => ({
            code: user.code,
            email: user.email,
            password:
                GENERATED_USER_PASSWORD
        })
    );
}

// ------------------------------------------------------------
// Flatten orders into order_items
// ------------------------------------------------------------

function flattenOrderItems(
    orders
) {
    const orderItems = [];

    for (const order of orders) {
        for (const item of order.items) {
            orderItems.push({
                order_code:
                    order.code,

                product_code:
                    item.product_code,

                quantity:
                    item.quantity,

                unit_price:
                    item.unit_price,

                subtotal:
                    item.subtotal
            });
        }
    }

    return orderItems;
}

// ------------------------------------------------------------
// Prepare orders CSV
// ------------------------------------------------------------

function prepareOrdersForCsv(
    orders
) {
    return orders.map(
        order => ({
            code:
                order.code,

            user_code:
                order.user_code,

            status:
                order.status,

            total_amount:
                order.total_amount,

            created_at:
                order.created_at
        })
    );
}

// ------------------------------------------------------------
// Prepare users CSV
// ------------------------------------------------------------

function prepareUsersForCsv(
    users
) {
    return users.map(
        user => ({
            code:
                user.code,

            first_name:
                user.first_name,

            last_name:
                user.last_name,

            email:
                user.email,

            phone:
                user.phone,

            password_hash:
                user.password_hash,

            role_id:
                user.role_id,

            role_name:
                user.role_name,

            is_active:
                user.is_active
        })
    );
}

// ------------------------------------------------------------
// Prepare products CSV
// ------------------------------------------------------------

function prepareProductsForCsv(
    products
) {
    return products.map(
        product => ({
            code:
                product.code,

            category_code:
                product.category_code,

            category_name:
                product.category_name,

            product_type:
                product.product_type,

            brand_code:
                product.brand_code,

            brand_name:
                product.brand_name,

            supplier_code:
                product.supplier_code,

            supplier_name:
                product.supplier_name,

            name:
                product.name,

            description:
                product.description,

            price:
                product.price,

            stock_quantity:
                product.stock_quantity,

            image_path:
                product.image_path,

            attributes:
                JSON.stringify(
                    product.attributes
                )
        })
    );
}

// ------------------------------------------------------------
// Generate one dataset
// ------------------------------------------------------------

function generateDataset(
    datasetName
) {
    const config =
        DATASET_CONFIG[
            datasetName
        ];

    if (!config) {
        throw new Error(
            `Unknown dataset: ${datasetName}`
        );
    }

    console.log("");
    console.log(
        "================================================"
    );
    console.log(
        `Generating ${datasetName.toUpperCase()} dataset`
    );
    console.log(
        "================================================"
    );

    console.log(
        `Products: ${config.productCount}`
    );

    console.log(
        `Users: ${config.userCount}`
    );

    console.log(
        `Orders: ${config.orderCount}`
    );

    // --------------------------------------------------------
    // Initialize deterministic product generation
    // --------------------------------------------------------

    initializeFaker(
        datasetName
    );

    // --------------------------------------------------------
    // Generate products
    // --------------------------------------------------------

    console.log(
        "Generating products..."
    );

    const products =
        generateProducts(
            datasetName,
            config.productCount
        );

    console.log(
        `Generated ${products.length} products.`
    );

    // --------------------------------------------------------
    // Generate users
    // --------------------------------------------------------

    console.log(
        "Generating users..."
    );

    const users =
        generateUsers(
            datasetName
        );

    console.log(
        `Generated ${users.length} users.`
    );

    // --------------------------------------------------------
    // Generate orders
    // --------------------------------------------------------

    console.log(
        "Generating orders..."
    );

    const orders =
        generateOrders(
            datasetName,
            users,
            products
        );

    console.log(
        `Generated ${orders.length} orders.`
    );

    // --------------------------------------------------------
    // Validate everything before writing
    // --------------------------------------------------------

    validateDataset({
        categories:
            CATEGORIES,

        brands:
            BRANDS,

        suppliers:
            SUPPLIERS,

        users,

        products,

        orders,

        expectedUserCount:
            config.userCount
    });

    // --------------------------------------------------------
    // Create output directory
    // --------------------------------------------------------

    const outputDirectory =
        path.join(
            DATASET_ROOT,
            datasetName
        );

    fs.mkdirSync(
        outputDirectory,
        {
            recursive: true
        }
    );

    // --------------------------------------------------------
    // Write JSON reference data
    // --------------------------------------------------------

    writeJson(
        path.join(
            outputDirectory,
            "categories.json"
        ),
        CATEGORIES
    );

    writeJson(
        path.join(
            outputDirectory,
            "brands.json"
        ),
        BRANDS
    );

    writeJson(
        path.join(
            outputDirectory,
            "suppliers.json"
        ),
        SUPPLIERS
    );

    writeJson(
        path.join(
            outputDirectory,
            "benchmark_users.json"
        ),
        BENCHMARK_USERS
    );

    // --------------------------------------------------------
    // Write CSV data
    // --------------------------------------------------------

    writeCsv(
        path.join(
            outputDirectory,
            "products.csv"
        ),
        prepareProductsForCsv(
            products
        )
    );

    writeCsv(
        path.join(
            outputDirectory,
            "users.csv"
        ),
        prepareUsersForCsv(
            users
        )
    );

    writeCsv(
        path.join(
            outputDirectory,
            "orders.csv"
        ),
        prepareOrdersForCsv(
            orders
        )
    );

    writeCsv(
        path.join(
            outputDirectory,
            "order_items.csv"
        ),
        flattenOrderItems(
            orders
        )
    );

    // --------------------------------------------------------
    // Local-only credentials
    // --------------------------------------------------------

    writeCsv(
        path.join(
            outputDirectory,
            "generated_credentials.csv"
        ),
        generateCredentials(
            users
        )
    );

    // --------------------------------------------------------
    // Metadata
    // --------------------------------------------------------

    const metadata = {
        dataset_name:
            datasetName,

        generated_at:
            new Date().toISOString(),

        product_count:
            products.length,

        user_count:
            users.length,

        order_count:
            orders.length,

        order_item_count:
            flattenOrderItems(
                orders
            ).length,

        category_count:
            CATEGORIES.length,

        brand_count:
            BRANDS.length,

        supplier_count:
            SUPPLIERS.length,

        product_type_count:
            CATEGORIES.flatMap(
                category =>
                    category.productTypes
            ).length,

        generated_user_password:
            "stored only in local credentials file",

        deterministic:
            true
    };

    writeJson(
        path.join(
            outputDirectory,
            "metadata.json"
        ),
        metadata
    );

    console.log("");
    console.log(
        `Dataset generated successfully: ${outputDirectory}`
    );
}

// ------------------------------------------------------------
// Command-line entry
// ------------------------------------------------------------

const datasetName =
    process.argv[2];

if (!datasetName) {
    console.error(
        "Usage: node generate.js <small|medium|large>"
    );

    process.exit(1);
}

generateDataset(
    datasetName
);