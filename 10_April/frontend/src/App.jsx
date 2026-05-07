import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  // Fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch(
      "http://localhost:3000/tasks"
    );

    const data = await response.json();

    setTasks(data);
  };

  // Add Task
  const addTask = async () => {
    if (!title) return;

    await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");

    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Connect the Stack</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <button onClick={addTask} style={styles.button}>
        Add Task
      </button>

      <ul style={styles.list}>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },

  input: {
    padding: "10px",
    width: "250px",
    marginRight: "10px",
  },

  button: {
    padding: "10px 20px",
    cursor: "pointer",
  },

  list: {
    marginTop: "20px",
    listStyle: "none",
  },
};