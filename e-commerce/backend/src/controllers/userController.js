const { verify, authorisation } = require("./verifyTokenController");
const hashed = require("crypto-js");
const User = require("../models/userModel");
const router = require("express").Router();

router.put("/:id", authorisation, async (req, res) => {
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

module.exports = router;
