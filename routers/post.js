const express = require("express");
const Post = require("../model/Post");

const postRouter = express.Router();

postRouter.get("/posts", async (_req, res) => {
  const posts = await Post.find();
  if (!posts) {
    res.send("no posts found");
  }
  console.log("posts", posts);
  res.send(posts);
});

postRouter.post("/post", (req, res) => {
  const data = req.body;

  if (!data.title || !data.author) {
    return res.send("title and author are mandatory");
  }
  Post.create(data);
  res.status(201).send("posted");
});

postRouter.put("/post/:id", async (_req, res) => {
  const { id } = _req.params;
  const { title, content } = _req.body;

  const posts = await Post.findByIdAndUpdate(id, { title, content });
  if (!posts) {
    return res.send("invalid request");
  }
  res.send("updated successfully", posts);
});

postRouter.delete("/post/:id", async (_req, res) => {
  const { id } = _req.params;
  const posts = await Post.findByIdAndDelete(id);
  if (!posts) {
    return res.send("invalid request");
  }
  res.send("deleted successfully");
});

module.exports = postRouter;
