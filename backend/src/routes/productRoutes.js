const express = require("express");
const productController = require("../controllers/productController");
const validateProductQuery = require("../middleware/productValidation");

const router = express.Router();

router.get(
    "/",
    validateProductQuery,
    productController.getProducts
);

router.get("/:id", productController.getProductById);

module.exports = router;