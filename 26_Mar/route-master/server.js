const express = require("express");

const app = express();

const books = [
  { id: 1, name: "Harry Potter" },
  { id: 2, name: "Atomic Habits" },
];

const authors = [
  { id: 1, name: "J.K. Rowling" },
  { id: 2, name: "James Clear" },
];

app.get("/", (req, res) => {
  res.send("Welcome to Bookstore API");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/authors", (req, res) => {
  res.json(authors);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});