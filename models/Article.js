const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please add a title "],
      trim: true,
      maxlength: [50, "Name can not be more than 50 charcters"],
    },
    description: {
      type: String,
      required: [true, "please add description"],
      maxlength: [500, "description can not be more than 50 charcters"],
    },
    link: {
      type: String,
    },

    photo: {
      type: String,
      required: [true, "please add a photo"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Article", ArticleSchema);
