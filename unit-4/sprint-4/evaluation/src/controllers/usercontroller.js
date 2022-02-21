const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const { body } = require("express-validator");
const crudController = require("./crudcontrollers.js");

router.post(
  "",
  body("first_name").isString().isLength({ min: 3, max: 30 }),
  body("last_name").isString().isLength({ min: 3, max: 30 }),
  body("age").isFloat({ min: 1, max: 150 }),
  body("email").isEmail().isString(),
  crudController(User).post
);

module.exports = router;
