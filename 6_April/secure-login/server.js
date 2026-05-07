const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const SECRET_KEY = "mysecretkey";


// SIGNUP
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
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

  // Compare Password
  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid Password",
    });
  }

  // Generate JWT Token
  const token = jwt.sign(
    { userId: user._id },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login Successful",
    token,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});