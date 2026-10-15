function validateRegister(req, res, next) {
    const {
        name,
        email,
        password
    } = req.body || {};

    const errors = [];

    if (
        typeof name !== "string" ||
        name.trim().length === 0
    ) {
        errors.push("name is required");
    }

    if (
        typeof email !== "string" ||
        email.trim().length === 0
    ) {
        errors.push("email is required");
    }

    if (
        typeof password !== "string" ||
        password.length < 8
    ) {
        errors.push(
            "password must be at least 8 characters"
        );
    }

    if (errors.length > 0) {
        return res.status(400).json({
            errors
        });
    }

    next();
}

function validateLogin(req, res, next) {
    const {
        email,
        password
    } = req.body || {};

    const errors = [];

    if (
        typeof email !== "string" ||
        email.trim().length === 0
    ) {
        errors.push("email is required");
    }

    if (
        typeof password !== "string" ||
        password.length === 0
    ) {
        errors.push("password is required");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            errors
        });
    }

    next();
}

module.exports = {
    validateRegister,
    validateLogin
};