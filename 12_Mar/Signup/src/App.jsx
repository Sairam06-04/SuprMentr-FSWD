import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let valid = true;

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Enter a valid email");
      valid = false;
    }

    // Password Validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    }

    if (valid) {
      alert("Signup Successful");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Smart Signup Form</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        {emailError && (
          <p style={styles.error}>{emailError}</p>
        )}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {passwordError && (
          <p style={styles.error}>{passwordError}</p>
        )}

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "auto",
  },

  input: {
    padding: "10px",
    margin: "10px 0",
  },

  button: {
    padding: "10px",
    cursor: "pointer",
  },

  error: {
    color: "red",
    margin: 0,
    fontSize: "14px",
  },
};