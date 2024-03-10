const mongoose = require("mongoose");

const CURRENT_YEAR = new Date().getFullYear();

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: { type: String, required: true },
  year: {
    type: Number,
    required: true,
    min: 1,
    max: [CURRENT_YEAR, `Year cannot be greater than ${CURRENT_YEAR}`],
  },
  copies: {
    type: Number,
    required: true,
    min: [0, "A book can't have negative copies"],
    max: [35, "The library can't have more than 35 copies"],
  },
  availableOnline: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema, "book");
