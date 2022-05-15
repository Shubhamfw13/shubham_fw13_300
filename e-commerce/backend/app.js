const express = require("express");
const app = express();
const connect = require("./src/config/db");
const userController = require("./src/controllers/userController")
const authController = require("./src/controllers/authController")
app.use(express.json());




app.use("/users",userController)
app.use("/users",authController)

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
