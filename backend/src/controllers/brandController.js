const brandRepository = require("../repositories/brandRepository");

async function getBrands(req, res) {
    try {
        const brands = await brandRepository.getAllBrands();

        res.json({
            data: brands,
            count: brands.length
        });
    } catch (error) {
        console.error("Error fetching brands:", error);

        res.status(500).json({
            error: "Failed to fetch brands"
        });
    }
}

module.exports = {
    getBrands
};