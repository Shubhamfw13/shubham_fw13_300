const { authorisationAdmin } = require("./verifyTokenController");
const Product = require("../models/productModel");
const router = require("express").Router();

router.post("/", authorisationAdmin, async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/:id", authorisationAdmin, async (req, res) => {
  try {
    const update = await Product.findByIdAndUpdate(
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

router.delete("/:id", authorisationAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product Removed");
  } catch (err) {
    res.status(500).send({ Error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product);
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({ Error: err.message });
  }
});

router.get("/", async (req, res) => {
  const qLatest = req.query.new;
  const qCategory = req.query.categories;
  try {
    let product;
    if (qLatest) {
      product = await Product.find().sort({ createdAt: -1 }).limit(5);
      //   http://localhost:8000/products?new=true
    } else if (qCategory) {
      // http://localhost:8000/products?categories=RPG
      // http://localhost:8000/products?categories=Action
      product = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      product = await Product.find();
    }
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send({ Error: err.message });
  }
});

module.exports = router;
