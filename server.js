const express = require("express");

const app = express();

app.use(express.json());

const logTimeMiddleware = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
};

app.use(logTimeMiddleware);

app.get("/hi", (req, res) => {
  res.send("hello from root");
});

app.post("/post", (req, res) => {
  res.send("hkll " + req.body.name);
});

app.listen(8000, () => {
  console.log("server running on the port");
});
