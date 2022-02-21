const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const { body } = require("express-validator");
const crudController = require("./crudcontrollers.js");
const {upload} = require("../middlewares/fileuploads")
const path = require("path")

router.post(
  "",
  body("first_name").isString().isLength({ min: 3, max: 30 }),
  body("last_name").isString().isLength({ min: 3, max: 30 }),
  body("age").isFloat({ min: 1, max: 150 }),
  body("email").isEmail().isString(),
  

);

module.exports = router;
