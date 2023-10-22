const Product = require("../models/product.model");
const Category = require("../models/category.model");

// nối quan hệ 1 nhiều
Product.belongsTo(Category, { foreignKey: "category_id", onDelete: "CASCADE" });
Category.hasMany(Product, { foreignKey: "category_id" });

module.exports = {
  Product,
  Category,
};
