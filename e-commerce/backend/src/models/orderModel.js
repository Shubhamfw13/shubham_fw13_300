const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    products: [
      { productId: { type: String }, quantity: { type: Number, default: 1 } },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Pending" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
