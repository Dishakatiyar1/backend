const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  author: String,
  content: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
