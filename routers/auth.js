const express = require("express");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.cookie("token", "disha");
  res.send("login");
});

authRouter.post("/register", (req, res) => {
  res.send("register");
});

module.exports = authRouter;
