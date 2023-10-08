const express = require("express");
const cors = require("cors");
const categories = require("./data/categories.json");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is working fine");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`The new Dragon api is running port : http://localhost:${port}`);
});
