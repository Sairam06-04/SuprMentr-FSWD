import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>Dynamic List App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={styles.input}
      />

      <button onClick={addTask} style={styles.button}>
        Add
      </button>

      <ul style={styles.list}>
        {tasks.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item}

            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteButton}
            >
              Delete
            </button>
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
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },

  listItem: {
    margin: "10px auto",
    width: "300px",
    padding: "10px",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  deleteButton: {
    padding: "5px 10px",
    cursor: "pointer",
  },
};