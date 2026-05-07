const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/crudDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema
const taskSchema = new mongoose.Schema({
  title: String,
});

// Model
const Task = mongoose.model("Task", taskSchema);


// CREATE
app.post("/tasks", async (req, res) => {
  const task = new Task({
    title: req.body.title,
  });

  await task.save();

  res.json(task);
});


// READ
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();

  res.json(tasks);
});


// UPDATE
app.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
    },
    { new: true }
  );

  res.json(updatedTask);
});


// DELETE
app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.json({
    message: "Task Deleted",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});