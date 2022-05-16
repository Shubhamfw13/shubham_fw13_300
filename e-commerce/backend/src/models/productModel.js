const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, required: true },
    strip: { type: String, required: true }, 
    pos1: { type: String, required: true },
    pos2: { type: String, required: true },
    pos3: { type: String, required: true },
    pos4: { type: String, required: true },
    price: { type: Number, required: true },
    categories: { type: Array },
    rating: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
