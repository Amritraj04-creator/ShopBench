const pool = require("../config/database");

async function getAllCategories() {
    const result = await pool.query(`
        SELECT
            id,
            name,
            description
        FROM categories
        ORDER BY id;
    `);

    return result.rows;
}

module.exports = {
    getAllCategories
};