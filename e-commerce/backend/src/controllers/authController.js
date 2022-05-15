const router = require("express").Router();
const User = require("../models/userModel");
const hashed = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    console.log("Email Already Taken");
    return res.status(400).send({ Error: "Email Already Taken" });
  } else {
    user = await User({
      username: req.body.username,
      email: req.body.email,
      password: hashed.AES.encrypt(
        req.body.password,
        process.env.SECRET
      ).toString(),
    });
  }
  try {
    user.save();
    res.status(201).send(user);
    console.log("user created");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send("wrong credentials");
    }
    const password = hashed.AES.decrypt(
      user.password,
      process.env.SECRET
    ).toString(hashed.enc.Utf8);
    if (password != req.body.password) {
      return res.status(401).send("wrong credentials");
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );
    return res.status(200).send({ user, token });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
