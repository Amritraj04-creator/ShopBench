function requireRoles(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                error: "Authentication required"
            });
        }

        if (
            !allowedRoles.includes(
                req.user.role_id
            )
        ) {
            return res.status(403).json({
                error: "Access denied"
            });
        }

        next();
    };
}

module.exports = requireRoles;