require("dotenv").config({ path: "./../.env" });
const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

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

const Book = mongoose.model("Book", bookSchema, "book");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/books", async (req, res) => {
  console.log(await Book.find());

  res.send("Books Displayed!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
