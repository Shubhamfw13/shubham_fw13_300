const express = require("express");
const app = express();
const connect = require("./src/configs/db");

const start = async () => {
  await connect();
  app.listen(2022, () => {
    console.log("listening on port 2022");
  });
};
start();
