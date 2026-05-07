let tasks = [
  { id: 1, title: "Learn MVC" },
  { id: 2, title: "Build API" },
];

// GET Tasks
const getTasks = (req, res) => {
  res.json(tasks);
};

// POST Task
const addTask = (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
  };

  tasks.push(newTask);

  res.json({
    message: "Task Added",
    task: newTask,
  });
};

// PUT Task
const updateTask = (req, res) => {
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
};

// DELETE Task
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.filter((t) => t.id !== id);

  res.json({
    message: "Task Deleted",
  });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
};