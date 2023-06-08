const mongoose = require("mongoose");
const env = require("./environment");
mongoose.set("strictQuery", true);

mongoose.connect(`mongodb://0.0.0.0:27017/${env.db}`);

const db = mongoose.connection;

db.on("err", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to database :: MongoDB");
});
