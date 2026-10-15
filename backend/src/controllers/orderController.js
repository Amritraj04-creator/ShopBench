const orderRepository = require("../repositories/orderRepository");

async function createOrder(req, res) {
    try {
        const { items } = req.body;

        const userId = req.user.user_id;

        const result = await orderRepository.createOrder(
            userId,
            items
        );

        res.status(201).json(result);
    } catch (error) {
        console.error("Error creating order:", error);

        if (
            error.message === "User not found" ||
            error.message.includes("not found") ||
            error.message.includes("is inactive") ||
            error.message.includes("Insufficient stock")
        ) {
            return res.status(400).json({
                error: error.message
            });
        }

        res.status(500).json({
            error: "Failed to create order"
        });
    }
}

async function getOrderById(req, res) {
    try {
        const orderId = Number(req.params.id);

        const userId = req.user.user_id;

        const order =
            await orderRepository.getOrderById(
                orderId,
                userId
            );

        if (!order) {
            return res.status(404).json({
                error: "Order not found"
            });
        }

        res.json({
            data: order
        });
    } catch (error) {
        console.error(
            "Error fetching order:",
            error
        );

        res.status(500).json({
            error: "Failed to fetch order"
        });
    }
}

async function getOrdersByUser(req, res) {
    try {
        const userId = req.user.user_id;

        const page = Number(
            req.query.page || 1
        );

        const limit = Number(
            req.query.limit || 20
        );

        const orders =
            await orderRepository.getOrdersByUser(
                userId,
                page,
                limit
            );

        res.json({
            data: orders,
            count: orders.length,
            page,
            limit
        });
    } catch (error) {
        console.error(
            "Error fetching orders:",
            error
        );

        res.status(500).json({
            error: "Failed to fetch orders"
        });
    }
}

module.exports = {
    createOrder,
    getOrderById,
    getOrdersByUser
};