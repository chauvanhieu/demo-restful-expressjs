const express = require("express");
const router = express.Router();

// thêm router của product và categories
const ProductRouter = require("./product.router");
const CategoryRouter = require("./category.router");

router.use("/products", ProductRouter);
router.use("/categories", CategoryRouter);

module.exports = router;
// file router tổng hợp những router thành phần khác, product, category
// lấy router này nạp vào file index.js app
