const express = require("express");
const app = express();
const connect = require("./src/config/db");
const userController = require("./src/controllers/userController");
const authController = require("./src/controllers/authController");
const productsController = require("./src/controllers/productController");
const cartController = require("./src/controllers/cartController")
const orderController = require("./src/controllers/orderController")

const cors = require("cors");
app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/users", userController);
app.use("/auth", authController);
app.use("/cart", cartController);
app.use("/products", productsController);
app.use("/order",orderController)

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

start();
