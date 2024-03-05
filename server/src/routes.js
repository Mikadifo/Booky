const express = require("express");
const Book = require("./models/book.js");

const recordRoutes = express.Router();

recordRoutes.route("*").all((req, res) => {
  throw {
    statusCode: 404,
    isOperational: true,
    message: "This router does not exist in the server.",
  };
});

recordRoutes.route("/").get((_, res) => {
  res.send("Welcome to Booky!");
});

recordRoutes.route("/book/create").post(async (req, res) => {
  await Book.create(req.body);
  res.status(201).send("Book Saved");
});

recordRoutes.route("/book/list").get(async (_, res) => {
  res.status(200).json(await Book.find());
});

recordRoutes.route("/book/update/:id").put(async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body);
  console.log(book);
  res.send("ok");
  //if (!book) {
  //res.status(200).json({
  //message: "",
  //error: `Book by id ${req.params.id} not found. Please check the correct id is being send or try again later.`,
  //});
  //} else {
  //res
  //.status(200)
  //.json({ message: "Book Updated!", error: "", data: { book } });
  //}
});

recordRoutes.route("/book/delete/:id").delete(async (req, res) => {
  await Book.deleteOne({ _id: req.params.id });
  res.status(200).send("Book Deleted");
});

module.exports = recordRoutes;
