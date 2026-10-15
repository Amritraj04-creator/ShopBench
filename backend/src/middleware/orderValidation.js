function validateCreateOrder(req, res, next) {
    const { items } = req.body || {};

    const errors = [];


    // Validate items array
    if (!Array.isArray(items)) {
        errors.push("items must be an array");
    } else if (items.length === 0) {
        errors.push("items cannot be empty");
    }

    // Validate individual items
    if (Array.isArray(items)) {
        const productIds = new Set();

        items.forEach((item, index) => {
            if (
                item === null ||
                typeof item !== "object" ||
                Array.isArray(item)
            ) {
                errors.push(
                    `items[${index}] must be an object`
                );

                return;
            }

            const { product_id, quantity } = item;

            if (product_id === undefined) {
                errors.push(
                    `items[${index}].product_id is required`
                );
            } else if (
                !Number.isInteger(product_id) ||
                product_id <= 0
            ) {
                errors.push(
                    `items[${index}].product_id must be a positive integer`
                );
            }

            if (quantity === undefined) {
                errors.push(
                    `items[${index}].quantity is required`
                );
            } else if (
                !Number.isInteger(quantity) ||
                quantity <= 0
            ) {
                errors.push(
                    `items[${index}].quantity must be a positive integer`
                );
            }

            // Check duplicate products
            if (
                Number.isInteger(product_id) &&
                product_id > 0
            ) {
                if (productIds.has(product_id)) {
                    errors.push(
                        `Product ${product_id} appears more than once in the order`
                    );
                }

                productIds.add(product_id);
            }
        });
    }

    if (errors.length > 0) {
        return res.status(400).json({
            errors
        });
    }

    next();
}

module.exports = validateCreateOrder;