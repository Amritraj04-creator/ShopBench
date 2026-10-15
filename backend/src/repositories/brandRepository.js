const pool = require("../config/database");

async function getAllBrands() {
    const result = await pool.query(`
        SELECT
            id,
            name,
            description
        FROM brands
        ORDER BY id;
    `);

    return result.rows;
}

module.exports = {
    getAllBrands
};