const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Learn Node.js" },
];

// GET API
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST API
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
  };

  tasks.push(newTask);

  res.json(newTask);
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});