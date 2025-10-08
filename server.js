const express = require("express");

const app = express();

app.use(express.json());

app.get("/hi", (req, res) => {
  res.json("hello from root");
});

app.post("/post", (req, res) => {
  res.json("hkll");
});

app.listen(8000, () => {
  console.log("server running on the port");
});
