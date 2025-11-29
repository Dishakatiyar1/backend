const express = require("express");

const profileRouter = express.Router();

profileRouter.get("/profile", (req, res) => {
  console.log("cookies", req.cookies);
  res.send("profile data");
});

module.exports = profileRouter;
