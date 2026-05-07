import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <h1>Multi-Page App</h1>

        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>
            Home
          </Link>

          <Link to="/about" style={styles.link}>
            About
          </Link>

          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },

  nav: {
    marginBottom: "20px",
  },

  link: {
    margin: "0 15px",
    textDecoration: "none",
    fontSize: "18px",
  },
};