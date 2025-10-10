const express = require("express");
const authRouter = require("./routers/auth");

const app = express();

app.use(express.json());

const logTimeMiddleware = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
};

app.use(logTimeMiddleware);

app.use("/auth", authRouter);

app.listen(8000, () => {
  console.log("server running on the port");
});
