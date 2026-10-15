const productRepository = require("../repositories/productRepository");


async function getProducts(req, res) {
    try {
        const result = await productRepository.getAllProducts(req.query);

        res.json({
            data: result.products,
            count: result.products.length,
            total: result.total,
            page: Number(req.query.page || 1),
            limit: Number(req.query.limit || 20)
        });
        
    } catch (error) {
        console.error("Error fetching products:", error);

        res.status(500).json({
            error: "Failed to fetch products"
        });
    }
}


async function getProductById(req, res) {
    try {
        const product = await productRepository.getProductById(req.params.id);

        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }

        res.json({
            data: product
        });
    } catch (error) {
        console.error("Error fetching product:", error);

        res.status(500).json({
            error: "Failed to fetch product"
        });
    }
}


module.exports = {
    getProducts,
    getProductById
};