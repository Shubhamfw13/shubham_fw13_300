const {
  verify,
  authorisation,
  authorisationAdmin,
} = require("./verifyTokenController");
const hashed = require("crypto-js");
const User = require("../models/userModel");
const router = require("express").Router();

router.patch("/:id", authorisation, async (req, res) => {
  // https://gamersparadisee.herokuapp.com/users/_id
  if (req.body.password) {
    req.body.password = hashed.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString();
  }
  try {
    const update = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(update);
  } catch (err) {
    res.status(500).send({ Error: err.message });
  }
});

router.delete("/:id", authorisation, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    // https://gamersparadisee.herokuapp.com/users/_id
    res.status(200).send("User Removed");
  } catch (err) {
    res.status(500).send({ Error: err.message });
  }
});

router.get("/find/:id", authorisationAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // https://gamersparadisee.herokuapp.com/users/find/_id
    const { password, ...others } = user._doc;
    res.status(200).send(others);
  } catch (err) {
    res.status(500).send({ Error: err.message });
  }
});

router.get("/", authorisationAdmin, async (req, res) => {
  const q = req.query.new;
  // https://gamersparadisee.herokuapp.com/users?new=true
  try {
    const user = q
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    // https://gamersparadisee.herokuapp.com/users
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ Error: err.message });
  }
});

module.exports = router;
