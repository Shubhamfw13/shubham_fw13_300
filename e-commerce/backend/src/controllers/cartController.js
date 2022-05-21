const router = require("express").Router();

const Cart = require("../models/cartModel");

router.post("/:id", async (req, res) => {
  try {
    // delete all cart data
    let user_cart = await Cart.findOne({ user_id: req.body.user_id }).exec();
    if (user_cart) {
      let product_id = req.body.product_id;
      let product_price = req.body.product_price;
      let product_index = user_cart.products.findIndex(
        (product) => product.product_id.toString() === product_id
      );

      if (product_index !== -1) {
        user_cart.products[product_index].quantity += 1;
      } else {
        user_cart.products.push({
          product_id: product_id,
          quantity: 1,
          price: product_price,
        });
      }

      await user_cart.save();
    } else {
      let new_cart = new Cart({
        user_id: req.body.user_id,
        products: [
          {
            product_id: req.body.product_id,
            quantity: 1,
            price: req.body.product_price,
          },
        ],
      });

      await new_cart.save();
    }
    res.send("success");
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  console.log(req.body, req.params, "get cart");
  try {
    const items = await Cart.findOne({ user_id: req.params.id }).lean().exec();
    return res.status(200).send(items);
  } catch (error) {
    // console.log(error);
    return res.status(404).send({});
  }
});

router.delete("/:id/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  const productid = req.params.id;
  const is_delete_all = req.query.all
  console.log(is_delete_all);
  try {
    if(is_delete_all == "true"){
      console.log("deleting all")
      await Cart.deleteOne({user_id}).exec()
    } else {
      console.log("deleting", productid)
       await Cart.findOneAndUpdate(
      { user_id: user_id },
      { $pull: { products: { product_id: productid } } }
    ).exec();
    }
    return res.status(200).send("Cart Deleted");
  } catch (error) {
    // console.log(error);
    return res.status(500).send("Failed");
  }
});

module.exports = router;
