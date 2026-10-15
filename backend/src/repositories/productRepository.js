const pool = require("../config/database");

async function getAllProducts(filters = {}) {
    const {
        search,
        category_id,
        brand_id,
        min_price,
        max_price,
        sort,
        page = "1",
        limit = "20"
    } = filters;

    const conditions = [];
    const values = [];

    // Convert pagination values to numbers
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    // Calculate how many rows PostgreSQL should skip
    const offset = (pageNumber - 1) * limitNumber;


    // --------------------------------------------------
    // SEARCH
    // --------------------------------------------------

    if (search) {
        values.push(`%${search}%`);

        conditions.push(`
            (
                p.name ILIKE $${values.length}
                OR p.description ILIKE $${values.length}
            )
        `);
    }


    // --------------------------------------------------
    // CATEGORY FILTER
    // --------------------------------------------------

    if (category_id) {
        values.push(category_id);

        conditions.push(`
            p.category_id = $${values.length}
        `);
    }


    // --------------------------------------------------
    // BRAND FILTER
    // --------------------------------------------------

    if (brand_id) {
        values.push(brand_id);

        conditions.push(`
            p.brand_id = $${values.length}
        `);
    }


    // --------------------------------------------------
    // MINIMUM PRICE
    // --------------------------------------------------

    if (min_price) {
        values.push(min_price);

        conditions.push(`
            p.price >= $${values.length}
        `);
    }


    // --------------------------------------------------
    // MAXIMUM PRICE
    // --------------------------------------------------

    if (max_price) {
        values.push(max_price);

        conditions.push(`
            p.price <= $${values.length}
        `);
    }


    // --------------------------------------------------
    // SORTING
    // --------------------------------------------------

    const allowedSorts = {
        price_asc: "p.price ASC",
        price_desc: "p.price DESC",
        name_asc: "p.name ASC",
        name_desc: "p.name DESC",
        newest: "p.created_at DESC",
        oldest: "p.created_at ASC"
    };

    let orderBy = "p.id ASC";

    if (sort && allowedSorts[sort]) {
        orderBy = allowedSorts[sort];
    }


    // --------------------------------------------------
    // MAIN PRODUCT QUERY
    // --------------------------------------------------

    let query = `
        SELECT
            p.id,
            p.name,
            p.description,
            p.price,
            p.stock_quantity,
            p.is_active,
            p.category_id,
            c.name AS category_name,
            p.brand_id,
            b.name AS brand_name,
            p.supplier_id,
            s.name AS supplier_name,
            p.created_at,
            p.updated_at
        FROM products p
        JOIN categories c
            ON p.category_id = c.id
        JOIN brands b
            ON p.brand_id = b.id
        JOIN suppliers s
            ON p.supplier_id = s.id
    `;


    // --------------------------------------------------
    // COUNT QUERY
    // --------------------------------------------------

    let countQuery = `
        SELECT COUNT(*) AS total
        FROM products p
        JOIN categories c
            ON p.category_id = c.id
        JOIN brands b
            ON p.brand_id = b.id
        JOIN suppliers s
            ON p.supplier_id = s.id
    `;


    // --------------------------------------------------
    // WHERE CONDITIONS
    // --------------------------------------------------

    if (conditions.length > 0) {
        const whereClause = `
            WHERE ${conditions.join(" AND ")}
        `;

        query += whereClause;
        countQuery += whereClause;
    }


    // --------------------------------------------------
    // SORT + PAGINATION
    // --------------------------------------------------

    query += `
        ORDER BY ${orderBy}
        LIMIT $${values.length + 1}
        OFFSET $${values.length + 2};
    `;

    const queryValues = [
        ...values,
        limitNumber,
        offset
    ];


    // --------------------------------------------------
    // EXECUTE QUERIES
    // --------------------------------------------------

    const result = await pool.query(query, queryValues);

    const countResult = await pool.query(
        countQuery,
        values
    );


    // PostgreSQL COUNT returns a string
    const total = Number(countResult.rows[0].total);


    return {
        products: result.rows,
        total
    };
}


async function getProductById(id) {
    const result = await pool.query(`
        SELECT
            p.id,
            p.name,
            p.description,
            p.price,
            p.stock_quantity,
            p.is_active,
            p.category_id,
            c.name AS category_name,
            p.brand_id,
            b.name AS brand_name,
            p.supplier_id,
            s.name AS supplier_name,
            p.created_at,
            p.updated_at
        FROM products p
        JOIN categories c
            ON p.category_id = c.id
        JOIN brands b
            ON p.brand_id = b.id
        JOIN suppliers s
            ON p.supplier_id = s.id
        WHERE p.id = $1;
    `, [id]);

    return result.rows[0];
}


module.exports = {
    getAllProducts,
    getProductById
};