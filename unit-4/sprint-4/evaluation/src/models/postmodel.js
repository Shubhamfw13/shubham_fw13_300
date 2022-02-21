const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    body: { type: String },
    likes: { type: Number, required: true, default: 0 },
    image: [{ type: String }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("post",postSchema)
