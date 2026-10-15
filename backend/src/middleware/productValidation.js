function validateProductQuery(req, res, next) {
    const query = req.query;
    const errors = [];

    if (query.category_id !== undefined) {
        if (
            !/^\d+$/.test(query.category_id) ||
            Number(query.category_id) <= 0
        ) {
            errors.push("category_id must be a positive integer");
        }
    }

    if (query.brand_id !== undefined) {
        if (
            !/^\d+$/.test(query.brand_id) ||
            Number(query.brand_id) <= 0
        ) {
            errors.push("brand_id must be a positive integer");
        }
    }

    if (query.min_price !== undefined) {
        const minPrice = Number(query.min_price);

        if (!Number.isFinite(minPrice) || minPrice < 0) {
            errors.push(
                "min_price must be a number greater than or equal to 0"
            );
        }
    }

    if (query.max_price !== undefined) {
        const maxPrice = Number(query.max_price);

        if (!Number.isFinite(maxPrice) || maxPrice < 0) {
            errors.push(
                "max_price must be a number greater than or equal to 0"
            );
        }
    }

    if (
        query.min_price !== undefined &&
        query.max_price !== undefined
    ) {
        const minPrice = Number(query.min_price);
        const maxPrice = Number(query.max_price);

        if (
            Number.isFinite(minPrice) &&
            Number.isFinite(maxPrice) &&
            minPrice > maxPrice
        ) {
            errors.push(
                "min_price cannot be greater than max_price"
            );
        }
    }

    const allowedSorts = [
        "price_asc",
        "price_desc",
        "name_asc",
        "name_desc",
        "newest",
        "oldest"
    ];

    if (
        query.sort !== undefined &&
        !allowedSorts.includes(query.sort)
    ) {
        errors.push("Invalid sort option");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            errors
        });
    }

    if (query.page !== undefined) {
        if (
            !/^\d+$/.test(query.page) ||
            Number(query.page) <= 0
        ) {
            errors.push("page must be a positive integer");
        }
    }

    if (query.limit !== undefined) {
        if (
            !/^\d+$/.test(query.limit) ||
            Number(query.limit) <= 0
        ) {
            errors.push("limit must be a positive integer");
        } else if (Number(query.limit) > 100) {
            errors.push("limit cannot be greater than 100");
        }
    }

    next();
}

module.exports = validateProductQuery;