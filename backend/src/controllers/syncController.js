const syncRepository =
    require("../repositories/syncRepository");

async function sync(req, res) {
    try {
        const {
            user_id,
            operations
        } = req.body;

        const results =
            await syncRepository.recordSyncOperations(
                user_id,
                operations
            );

        res.json({
            data: results,
            count: results.length
        });
    } catch (error) {
        console.error(
            "Error synchronizing:",
            error
        );

        res.status(500).json({
            error: "Synchronization failed"
        });
    }
}

module.exports = {
    sync
};