const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  author: String,
  isbn: String,
  genre: String,
  year: Number,
  copies: Number,
  availableOnline: Boolean,
});

module.exports = mongoose.model("Book", bookSchema, "book");
