const pool = require("../config/database");

async function recordSyncOperations(
    userId,
    operations
) {
    const client = await pool.connect();

    try {
        await client.query("BEGIN");

        const results = [];

        for (const operation of operations) {
            const result = await client.query(
                `
                INSERT INTO sync_records (
                    user_id,
                    entity_type,
                    entity_id,
                    operation,
                    status
                )
                VALUES ($1, $2, $3, $4, $5)
                RETURNING
                    id,
                    user_id,
                    entity_type,
                    entity_id,
                    operation,
                    status,
                    created_at;
                `,
                [
                    userId,
                    operation.entity_type,
                    operation.entity_id,
                    operation.operation,
                    "SYNCED"
                ]
            );

            results.push(result.rows[0]);
        }

        await client.query("COMMIT");

        return results;
    } catch (error) {
        await client.query("ROLLBACK");

        throw error;
    } finally {
        client.release();
    }
}

module.exports = {
    recordSyncOperations
};