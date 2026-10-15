function validateOrderQuery(req, res, next) {
    const {
        page = "1",
        limit = "20"
    } = req.query;

    const errors = [];

    if (
        !/^\d+$/.test(page) ||
        Number(page) <= 0
    ) {
        errors.push(
            "page must be a positive integer"
        );
    }

    if (
        !/^\d+$/.test(limit) ||
        Number(limit) <= 0
    ) {
        errors.push(
            "limit must be a positive integer"
        );
    } else if (Number(limit) > 100) {
        errors.push(
            "limit cannot be greater than 100"
        );
    }

    if (errors.length > 0) {
        return res.status(400).json({
            errors
        });
    }

    next();
}

module.exports = validateOrderQuery;