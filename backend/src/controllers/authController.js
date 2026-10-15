const authRepository = require("../repositories/authRepository");

const jwt = require("jsonwebtoken");

async function register(req, res) {
    try {
        const {
            name,
            email,
            password
        } = req.body;

        const user =
            await authRepository.registerUser(
                name.trim(),
                email.trim().toLowerCase(),
                password
            );

        res.status(201).json({
            data: user
        });
    } catch (error) {
        console.error(
            "Error registering user:",
            error
        );

        if (
            error.message ===
            "Email already registered"
        ) {
            return res.status(409).json({
                error: error.message
            });
        }

        res.status(500).json({
            error: "Failed to register user"
        });
    }
}

async function login(req, res) {
    try {
        const {
            email,
            password
        } = req.body;

        const user =
            await authRepository.loginUser(
                email.trim().toLowerCase(),
                password
            );

        const token = jwt.sign(
           {
              user_id: user.id,
              role_id: user.role.id
            },
              process.env.JWT_SECRET,
           {
              expiresIn: "1h"
            }
        );

        res.json({
            data: {
                    user,
                    token
                }
        });

    } catch (error) {
        console.error(
            "Error logging in:",
            error
        );

        if (
            error.message ===
            "Invalid email or password"
        ) {
            return res.status(401).json({
                error: error.message
            });
        }

        res.status(500).json({
            error: "Failed to login"
        });
    }
}

module.exports = {
    register,
    login
};