const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("", function (err) {
  if (err) console.log(err);
  else {
    console.log("Connected");
  }
});

app.listen(3000, () => console.log("Running on Port Number 3k"));
