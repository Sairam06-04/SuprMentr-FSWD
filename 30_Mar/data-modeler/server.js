const mongoose = require("mongoose");

const Blog = require("./blogSchema");

mongoose
  .connect("mongodb://127.0.0.1:27017/blogDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

async function createBlog() {
  const newBlog = new Blog({
    title: "My First Blog",
    content: "This is MongoDB schema example",
    author: "Sairam",
    category: "Tech",
    tags: ["MongoDB", "NodeJS"],
  });

  await newBlog.save();

  console.log("Blog Saved");
}

createBlog();