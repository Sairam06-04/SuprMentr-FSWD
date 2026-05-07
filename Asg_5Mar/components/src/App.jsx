// App.jsx

function Navbar() {
  return (
    <div style={styles.navbar}>
      <h2>My Website</h2>
      <input type="text" placeholder="Search..." />
    </div>
  );
}

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </div>
  );
}

function Card({ title }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>This is a component card.</p>
    </div>
  );
}

function Footer() {
  return (
    <div style={styles.footer}>
      <p>Footer Section</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />

      <div style={styles.main}>
        <Sidebar />

        <div style={styles.content}>
          <Card title="Component 1" />
          <Card title="Component 2" />
          <Card title="Component 3" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  navbar: {
    background: "#222",
    color: "white",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
  },

  main: {
    display: "flex",
  },

  sidebar: {
    width: "200px",
    background: "#f0f0f0",
    padding: "20px",
    height: "300px",
  },

  content: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },

  card: {
    border: "1px solid #ccc",
    padding: "20px",
    width: "150px",
  },

  footer: {
    background: "#222",
    color: "white",
    textAlign: "center",
    padding: "10px",
    marginTop: "20px",
  },
};