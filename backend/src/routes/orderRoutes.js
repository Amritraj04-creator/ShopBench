const express = require("express");

const orderController =
    require("../controllers/orderController");

const validateCreateOrder =
    require("../middleware/orderValidation");

const validateOrderQuery =
    require("../middleware/orderQueryValidation");

const authenticate =
    require("../middleware/authMiddleware");

const router = express.Router();

router.post(
    "/",
    authenticate,
    validateCreateOrder,
    orderController.createOrder
);

router.get(
    "/",
    authenticate,
    validateOrderQuery,
    orderController.getOrdersByUser
);

router.get(
    "/:id",
    authenticate,
    orderController.getOrderById
);

module.exports = router;