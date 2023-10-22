const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

module.exports = Product;
