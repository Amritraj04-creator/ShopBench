require("dotenv").config();

const express = require("express");
const pool = require("./config/database");

const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const brandRoutes = require("./routes/brandRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");
const syncRoutes = require("./routes/syncRoutes");

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/sync",syncRoutes);

const PORT = 3000;


app.get("/", (req, res) => {
    res.json({
        message: "ShopBench backend is running"
    });
});

app.listen(PORT, () => {
    console.log(`ShopBench backend running on port ${PORT}`);
});