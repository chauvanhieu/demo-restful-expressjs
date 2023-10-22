const sequelize = require("../configs/database");
const Product = require("../models/product.model");
const Category = require("../models/category.model");

// nối quan hệ 1 nhiều
Product.belongsTo(Category, { foreignKey: "category_id", onDelete: "CASCADE" });
Category.hasMany(Product, { foreignKey: "category_id" });

// dòng này sẽ hổ trợ tính năng "migration" giúp cho database đồng bộ column với model
// sequelize.sync({ force: true });

module.exports = {
  Product,
  Category,
};
