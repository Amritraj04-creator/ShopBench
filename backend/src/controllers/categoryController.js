const categoryRepository = require("../repositories/categoryRepository");

async function getCategories(req, res) {
    try {
        const categories = await categoryRepository.getAllCategories();

        res.json({
            data: categories,
            count: categories.length
        });
    } catch (error) {
        console.error("Error fetching categories:", error);

        res.status(500).json({
            error: "Failed to fetch categories"
        });
    }
}

module.exports = {
    getCategories
};