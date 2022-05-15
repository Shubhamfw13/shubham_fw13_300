const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    products: [
      { productId: { type: String }, quantity: { type: Number, default: 1 } },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
