const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = mongoose.model(
  "Article",
  new Schema(
    {
      title: String,
      description: String,
      tag: String,
      likes: String,
      author: String,
      comments: String,
    },
    { timestamps: true }
  )
);

module.exports = Article;
