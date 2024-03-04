require("dotenv").config({ path: "./../.env" });
const express = require("express");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  genre: String,
  year: Number,
  copies: Number,
  availableOnline: Boolean,
});

const Book = mongoose.model("Book", bookSchema);

main = async () => {
  console.log(process.env.DB_URL);
  await mongoose.connect(process.env.DB_URL);
};

main().catch((err) => console.log(err));

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books", async (req, res) => {
  console.log(await Book.find());
  res.send("Book Saved!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
