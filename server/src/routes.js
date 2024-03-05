const express = require("express");
const Book = require("./models/book.js");

const recordRoutes = express.Router();

recordRoutes.route("/").get((_, res) => {
  res.send("Hello World!");
});

recordRoutes.route("/book/create").post(async (req, res) => {
  await Book.create(req.body);

  res.status(200).send("Book Saved");
});

recordRoutes.route("/book/list").get(async (_, res) => {
  res.status(200).json(await Book.find());
});

recordRoutes.route("/book/update/:id").put(async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).send("Book Updated");
});

recordRoutes.route("/book/delete/:id").delete(async (req, res) => {
  await Book.deleteOne({ _id: req.params.id });

  res.status(200).send("Book Deleted");
});

module.exports = recordRoutes;
