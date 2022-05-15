const dotenv = require("dotenv");
const { append } = require("express/lib/response");
dotenv.config();

const mongoose = require("mongoose");



module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    return console.log("DataBase Connected With E-Commerce App");
  } catch (err) {
    console.log({ ERROR: err.message });
  }
};
