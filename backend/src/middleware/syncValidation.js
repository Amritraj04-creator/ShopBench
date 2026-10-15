function validateSync(req, res, next) {
    const {
        user_id,
        operations
    } = req.body || {};

    const errors = [];

    if (
        !Number.isInteger(user_id) ||
        user_id <= 0
    ) {
        errors.push(
            "user_id must be a positive integer"
        );
    }

    if (!Array.isArray(operations)) {
        errors.push(
            "operations must be an array"
        );
    } else if (operations.length === 0) {
        errors.push(
            "operations cannot be empty"
        );
    }

    if (Array.isArray(operations)) {
        operations.forEach((operation, index) => {
            if (
                operation === null ||
                typeof operation !== "object" ||
                Array.isArray(operation)
            ) {
                errors.push(
                    `operations[${index}] must be an object`
                );

                return;
            }

            const {
                entity_type,
                entity_id,
                operation: operationType
            } = operation;

            const allowedEntityTypes = [
                "PRODUCT",
                "ORDER",
                "ORDER_ITEM"
            ];

            const allowedOperations = [
                "CREATE",
                "UPDATE",
                "DELETE"
            ];

            if (
                !allowedEntityTypes.includes(
                    entity_type
                )
            ) {
                errors.push(
                    `operations[${index}].entity_type is invalid`
                );
            }

            if (
                !Number.isInteger(entity_id) ||
                entity_id <= 0
            ) {
                errors.push(
                    `operations[${index}].entity_id must be a positive integer`
                );
            }

            if (
                !allowedOperations.includes(
                    operationType
                )
            ) {
                errors.push(
                    `operations[${index}].operation is invalid`
                );
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

module.exports = validateSync;