const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const { body } = require("express-validator");
const crudController = require("./crudcontrollers.js");
const { upload } = require("../middlewares/fileuploads");
const path = require("path");
const res = require("express/lib/response");

router.post(
  "",
  body("first_name").isString().isLength({ min: 3, max: 30 }),
  body("last_name").isString().isLength({ min: 3, max: 30 }),
  body("age").isFloat({ min: 1, max: 150 }),
  body("email").isEmail().isString(),
  upload.any("profile_image"),
  async (req, res) => {
    try {
      const filePaths = req.files.map((file) => file.path);
      const user = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        email: req.body.email,
        profile_image: filePaths,
      });
      return res.send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
);

module.exports = router;
