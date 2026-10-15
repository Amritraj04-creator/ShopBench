const pool = require("../config/database");
const bcrypt = require("bcrypt");

async function registerUser(name, email, password) {
    const existingUser = await pool.query(
        `
        SELECT id
        FROM users
        WHERE email = $1;
        `,
        [email]
    );

    if (existingUser.rows.length > 0) {
        throw new Error("Email already registered");
    }

    const passwordHash = await bcrypt.hash(
        password,
        10
    );

    const result = await pool.query(
        `
        INSERT INTO users (
            role_id,
            name,
            email,
            password_hash
        )
        VALUES (
            1,
            $1,
            $2,
            $3
        )
        RETURNING
            id,
            role_id,
            name,
            email,
            created_at;
        `,
        [
            name,
            email,
            passwordHash
        ]
    );

    return result.rows[0];
}

async function loginUser(email, password) {
    const result = await pool.query(
        `
        SELECT
            u.id,
            u.name,
            u.email,
            u.password_hash,
            r.id AS role_id,
            r.name AS role_name
        FROM users u
        JOIN roles r
            ON u.role_id = r.id
        WHERE u.email = $1;
        `,
        [email]
    );

    if (result.rows.length === 0) {
        throw new Error("Invalid email or password");
    }

    const user = result.rows[0];

    const passwordMatches =
        await bcrypt.compare(
            password,
            user.password_hash
        );

    if (!passwordMatches) {
        throw new Error("Invalid email or password");
    }

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: {
           id: user.role_id,
           name: user.role_name
        }
    };
}

module.exports = {
    registerUser,
    loginUser
};