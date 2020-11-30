const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = mongoose.model(
  "User",
  new Schema({
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      lowercase: true,
    },
    age: {
      type: Number,
    },
  })
);
