const Sequelize = require("sequelize");
const sequelize = require("../configs/database");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
  },
  {
    tableName: "categories", // tên bảng đặt trong database
    timestamps: false,
  }
);

module.exports = Category; // còn đây là tên model dùng trong code
