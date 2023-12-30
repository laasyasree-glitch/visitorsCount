const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS
app.use(express.json());

let count = 0;

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

app.get("/getCount", (req, res) => {
  res.json({ count });
});

app.post("/incrementCount", (req, res) => {
  count += 1;
  res.json({ count });
});

module.exports = app;
