const express = require("express");
const authRouter = require("./routers/auth");
const { default: mongoose } = require("mongoose");
const postRouter = require("./routers/post");

const app = express();

const logTimeMiddleware = (req, _res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
};

app.use(express.json());

app.use("/auth", logTimeMiddleware, authRouter);

// app.use(logTimeMiddleware);

app.use("/", postRouter);

mongoose
  .connect(
    `mongodb+srv://dishakatiyar19424:Dishakatiyar19424@mycluster.etbjt.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster`
  )
  .then(() => {
    app.listen(8000, () => {
      console.log("server running on the port 8000");
    });
  })
  .catch(() => console.log("failed to connect with database"));
