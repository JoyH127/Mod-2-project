const express = require("express");
const routes = require("./routes");
const db = require("./db");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
// solve MIME type (“text/html”) mismatch problem
app.use(express.static("view"));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/", routes);

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
