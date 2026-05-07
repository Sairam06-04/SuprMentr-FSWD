const express = require("express");

const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: "Learn Node.js" },
  { id: 2, title: "Build API" },
];

// CREATE Task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
  };

  tasks.push(newTask);

  res.json({
    message: "Task Added",
    task: newTask,
  });
});

// READ All Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// UPDATE Task
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task Not Found",
    });
  }

  task.title = req.body.title;

  res.json({
    message: "Task Updated",
    task,
  });
});

// DELETE Task
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.filter((t) => t.id !== id);

  res.json({
    message: "Task Deleted",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});