const mongoose = require("mongoose");

const postlikeSchema = new mongoose.Schema(
  {
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("postlike", postlikeSchema);
