const Sequelize = require("sequelize");
const sequelize = new Sequelize("expressjs-demo", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // không cho hiện log
});

// gọi lệnh kết nối
sequelize
  .authenticate()
  .then(() => {
    console.log("Kết nối database thành công");
  })
  .catch((error) => {
    console.error("Lỗi kết nối cơ sở dữ liệu:", error);
  });

module.exports = sequelize;
