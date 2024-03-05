const express = require("express");
const Book = require("./models/book.js");

const recordRoutes = express.Router();

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
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Book Updated!", error: "", data: { book } });
  } catch (error) {
    res.status(200).json({
      message: "",
      error:
        "Something went wrong updating the book. Please check the correct id is being sent or try again later.",
    });
  }
});

recordRoutes.route("/book/delete/:id").delete(async (req, res) => {
  await Book.deleteOne({ _id: req.params.id });
  res.status(200).send("Book Deleted");
});

recordRoutes.route("*").all((req, res) => {
  throw {
    statusCode: 404,
    isOperational: true,
    message: "This route does not exist in the server.",
  };
});

module.exports = recordRoutes;
