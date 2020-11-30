const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comments = mongoose.model(
  "User",
  new Schema(
    {
      content: String,
      author: mongoose.Types.ObjectId,
      article: mongoose.Types.ObjectId,
    },
    { timeStamp: true }
  )
);

module.exports = Comments;
