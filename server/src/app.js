require("dotenv").config({ path: "./../.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.DB_URL);
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(require("./routes.js"));
app.use(require("./serverErrorHandler.js"));

app.listen(8000, () => {
  console.log("Server is listening on port 8000!");
});
