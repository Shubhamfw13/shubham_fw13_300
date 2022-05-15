const express = require("express");
const app = express();
const connect = require("./src/config/db");
const userController = require("./src/controllers/userController")
const authController = require("./src/controllers/authController")
const productsController = require("./src/controllers/productController")

app.use(express.json());




app.use("/users",userController)
app.use("/auth",authController)
app.use("/products",productsController)

const port = process.env.PORT || 8000;
const start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Port ${port} is Live`);
    });
  } catch (err) {
    console.log({ ERROR: err.message });
  }
};

start()
