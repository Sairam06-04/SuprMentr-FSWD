import { useState } from "react";

export default function App() {
  const [mood, setMood] = useState("🙂");

  const moods = {
    Happy: "😊",
    Sad: "😢",
    Angry: "😠",
    Excited: "🤩",
    Relaxed: "😌",
  };

  return (
    <div style={styles.container}>
      <h1>Mood Tracker</h1>

      <div style={styles.mood}>{mood}</div>

      <div>
        {Object.keys(moods).map((item) => (
          <button
            key={item}
            onClick={() => setMood(moods[item])}
            style={styles.button}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },

  mood: {
    fontSize: "100px",
    margin: "20px",
  },

  button: {
    padding: "10px 20px",
    margin: "10px",
    cursor: "pointer",
  },
};