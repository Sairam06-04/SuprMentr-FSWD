const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/roleDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const SECRET_KEY = "mysecretkey";

// User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
});

const User = mongoose.model("User", userSchema);


// SIGNUP
app.post("/signup", async (req, res) => {
  const { email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
    role,
  });

  await user.save();

  res.json({
    message: "User Registered",
  });
});


// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User Not Found",
    });
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({
    token,
  });
});


// AUTH MIDDLEWARE
function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "No Token",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    req.user = decoded;

    next();
  } catch {
    res.status(401).json({
      message: "Invalid Token",
    });
  }
}


// ROLE MIDDLEWARE
function adminOnly(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access Denied",
    });
  }

  next();
}


// USER ROUTE
app.get("/user", auth, (req, res) => {
  res.json({
    message: "Welcome User",
  });
});


// ADMIN ROUTE
app.get("/admin", auth, adminOnly, (req, res) => {
  res.json({
    message: "Welcome Admin",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});