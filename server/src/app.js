require("dotenv").config({ path: "./../.env" });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Book = require("./models/book.js");

mongoose.set("strictQuery", false);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/book/create", async (req, res) => {
  await Book.create(req.body);

  res.status(200).send("Book Saved");
});

app.get("/book/list", async (req, res) => {
  res.status(200).json(await Book.find());
});

app.delete("/book/delete/:id", async (req, res) => {
  await Book.deleteOne({ _id: req.params.id });

  res.status(200).send("Book Deleted");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
