const fs = require("fs");
const path = require("path");

function assert(
    condition,
    message
) {
    if (!condition) {
        throw new Error(
            `VALIDATION FAILED: ${message}`
        );
    }
}

// ------------------------------------------------------------
// Validate categories
// ------------------------------------------------------------

function validateCategories(
    categories
) {
    assert(
        categories.length === 10,
        "Expected exactly 10 categories."
    );

    const categoryCodes =
        new Set(
            categories.map(
                category => category.code
            )
        );

    assert(
        categoryCodes.size ===
        categories.length,
        "Duplicate category codes found."
    );

    const productTypes =
        categories.flatMap(
            category =>
                category.productTypes
        );

    assert(
        productTypes.length === 200,
        "Expected exactly 200 product types."
    );

    const uniqueProductTypes =
        new Set(productTypes);

    assert(
        uniqueProductTypes.size ===
        productTypes.length,
        "Duplicate product types found."
    );
}

// ------------------------------------------------------------
// Validate brands
// ------------------------------------------------------------

function validateBrands(
    brands
) {
    assert(
        brands.length === 100,
        "Expected exactly 100 brands."
    );

    const codes =
        new Set(
            brands.map(
                brand => brand.code
            )
        );

    assert(
        codes.size === brands.length,
        "Duplicate brand codes found."
    );

    const names =
        new Set(
            brands.map(
                brand => brand.name
            )
        );

    assert(
        names.size === brands.length,
        "Duplicate brand names found."
    );
}

// ------------------------------------------------------------
// Validate suppliers
// ------------------------------------------------------------

function validateSuppliers(
    suppliers
) {
    assert(
        suppliers.length === 100,
        "Expected exactly 100 suppliers."
    );

    const codes =
        new Set(
            suppliers.map(
                supplier =>
                    supplier.code
            )
        );

    assert(
        codes.size ===
        suppliers.length,
        "Duplicate supplier codes found."
    );

    const emails =
        new Set(
            suppliers.map(
                supplier =>
                    supplier.email
            )
        );

    assert(
        emails.size ===
        suppliers.length,
        "Duplicate supplier emails found."
    );
}

// ------------------------------------------------------------
// Validate users
// ------------------------------------------------------------

function validateUsers(
    users,
    expectedCount
) {
    assert(
        users.length ===
        expectedCount,
        `Expected ${expectedCount} users.`
    );

    const codes =
        new Set(
            users.map(
                user => user.code
            )
        );

    assert(
        codes.size === users.length,
        "Duplicate user codes found."
    );

    const emails =
        new Set(
            users.map(
                user => user.email
            )
        );

    assert(
        emails.size === users.length,
        "Duplicate user emails found."
    );

    for (const user of users) {
        assert(
            user.password_hash,
            `User ${user.code} has no password hash.`
        );

        assert(
            user.role_id === 1,
            `Generated user ${user.code} must be CUSTOMER.`
        );

        assert(
            user.is_active === true,
            `Generated user ${user.code} must be active.`
        );
    }
}

// ------------------------------------------------------------
// Validate products
// ------------------------------------------------------------

function validateProducts(
    products,
    categories,
    brands,
    suppliers
) {
    const categoryCodes =
        new Set(
            categories.map(
                category =>
                    category.code
            )
        );

    const brandCodes =
        new Set(
            brands.map(
                brand => brand.code
            )
        );

    const supplierCodes =
        new Set(
            suppliers.map(
                supplier =>
                    supplier.code
            )
        );

    const productCodes =
        new Set();

    for (const product of products) {
        assert(
            !productCodes.has(
                product.code
            ),
            `Duplicate product code: ${product.code}`
        );

        productCodes.add(
            product.code
        );

        assert(
            categoryCodes.has(
                product.category_code
            ),
            `Invalid category for ${product.code}`
        );

        assert(
            brandCodes.has(
                product.brand_code
            ),
            `Invalid brand for ${product.code}`
        );

        assert(
            supplierCodes.has(
                product.supplier_code
            ),
            `Invalid supplier for ${product.code}`
        );

        assert(
            product.name,
            `Missing product name: ${product.code}`
        );

        assert(
            product.description,
            `Missing product description: ${product.code}`
        );

        assert(
            Number(product.price) > 0,
            `Invalid price: ${product.code}`
        );

        assert(
            Number.isInteger(
                Number(
                    product.stock_quantity
                )
            ),
            `Invalid stock quantity: ${product.code}`
        );

        assert(
            product.stock_quantity >= 0,
            `Negative stock quantity: ${product.code}`
        );

        assert(
            product.image_path,
            `Missing image path: ${product.code}`
        );

        assert(
            product.attributes &&
            typeof product.attributes === "object",
            `Missing attributes: ${product.code}`
        );
    }
}

// ------------------------------------------------------------
// Validate orders
// ------------------------------------------------------------

function validateOrders(
    orders,
    users,
    products
) {
    const userCodes =
        new Set(
            users.map(
                user => user.code
            )
        );

    const productMap =
        new Map(
            products.map(
                product => [
                    product.code,
                    product
                ]
            )
        );

    const orderCodes =
        new Set();

    for (const order of orders) {
        assert(
            !orderCodes.has(
                order.code
            ),
            `Duplicate order code: ${order.code}`
        );

        orderCodes.add(
            order.code
        );

        assert(
            userCodes.has(
                order.user_code
            ),
            `Invalid user for order ${order.code}`
        );

        assert(
            Array.isArray(
                order.items
            ) &&
            order.items.length > 0,
            `Order ${order.code} has no items.`
        );

        let calculatedTotal = 0;

        for (const item of order.items) {
            const product =
                productMap.get(
                    item.product_code
                );

            assert(
                product,
                `Invalid product ${item.product_code} in ${order.code}`
            );

            assert(
                item.quantity >= 1,
                `Invalid quantity in ${order.code}`
            );

            assert(
                item.quantity <=
                product.stock_quantity,
                `Quantity exceeds stock in ${order.code}`
            );

            calculatedTotal +=
                Number(
                    item.subtotal
                );
        }

        assert(
            Math.abs(
                calculatedTotal -
                Number(
                    order.total_amount
                )
            ) < 0.01,
            `Incorrect total in ${order.code}`
        );
    }
}

// ------------------------------------------------------------
// Validate dataset
// ------------------------------------------------------------

function validateDataset({
    categories,
    brands,
    suppliers,
    users,
    products,
    orders,
    expectedUserCount
}) {
    console.log(
        "Starting dataset validation..."
    );

    validateCategories(
        categories
    );

    validateBrands(
        brands
    );

    validateSuppliers(
        suppliers
    );

    validateUsers(
        users,
        expectedUserCount
    );

    validateProducts(
        products,
        categories,
        brands,
        suppliers
    );

    validateOrders(
        orders,
        users,
        products
    );

    console.log(
        "Dataset validation passed."
    );

    return true;
}

module.exports = {
    validateCategories,
    validateBrands,
    validateSuppliers,
    validateUsers,
    validateProducts,
    validateOrders,
    validateDataset
};