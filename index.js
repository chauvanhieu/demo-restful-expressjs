const express = require("express");
const app = express();
// import database
require("./src/configs/database"); // chỉ cần require

// lỗi không đọc được body.json. cần phải import chuyển đổi thành dạng json cho body
app.use(express.json()); // xong

const systemRouter = require("./src/routes/index");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/v1", systemRouter); // tức là abc.com/v1/products ,...

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
