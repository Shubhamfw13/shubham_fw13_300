const express = require("express");
const app = express();
const connect = require("./src/configs/db");
const userController = require("./src/controllers/usercontroller")
const commentController = require("./src/controllers/commentcontroller")
const postController = require("./src/controllers/postcontroller")
const postlikeController = require("./src/controllers/postlikecontroller")


app.use(express.json())

app.use("/user",userController)
app.use("/comment",commentController)
app.use("./post",postController)
app.use("./postlike",postlikeController)


const start = async () => {
  await connect();
  app.listen(2022, () => {
    console.log("listening on port 2022");
  });
};
start();  
