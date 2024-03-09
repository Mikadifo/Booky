const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  userID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  booksBorrowed: { type: [String], required: true },
});

module.exports = mongoose.model("Customer", customerSchema, "customer");
