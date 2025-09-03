const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 3000;

// Add both middleware parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect db
mongoose
  .connect("mongodb://127.0.0.1:27017/my-data")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
  job: { type: String },
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/users", (req, res) => {
  res.send("no  World");
});

app.post("/api/users", async (req, res) => {
  try {
    const body = req.body;
    console.log("Request body:", body);

    if (
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.job ||
      !body.gender
    ) {
      return res.status(400).json({
        message: "All fields are required",
        received: req.body,
      });
    }

    const result = await User.create({
      first_name,
      last_name,
      email,
      gender,
      job,
    });

    console.log("Created user:", result);

    return res.status(201).json({
      message: "User created successfully",
      user: result,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ message: "Email already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
