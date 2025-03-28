
const express = require("express");
const carValueRoutes = require("./routes/carValueRoutes");  // Updated route import

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1", carValueRoutes);  

// Default route for testing purposes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Car Value API" });  // Updated message
});

module.exports = app;
