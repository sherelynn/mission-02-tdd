
const express = require("express");
const carValueRoutes = require("./routes/carValueRoutes");  // Updated route import
const app = express();

app.use(express.json());

app.use(carValueRoutes);  

module.exports = app;
