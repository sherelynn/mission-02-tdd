
const express = require("express");
const calculateCarValue = require("./carValue");
const carValueRoutes = require("./routes/carValueRoutes");
const discountRoute = require("../src/routes/discountRoute");
const premiumQuoteRoutes = require("../src/routes/premiumQuoteRoutes");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // To parse incoming requests with JSON payloads

//========== ROUTES ==========//
// Define the car value route
app.post("/api/v1/calculate-car-value", (req, res) => {
  const { carModel, year } = req.body;

  if (!carModel || !year) {
    return res.status(400).send({ error: "Car model and year are required" });
  }

  try {
    const carValue = calculateCarValue(carModel, year);
    return res.status(200).send({ car_value: carValue });
  } catch (error) {
    console.error("Error processing car value:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
});

// Define other routes
app.use(carValueRoutes);
app.use("/api/v1", discountRoute);
app.use("/api/v1/quote", premiumQuoteRoutes);

//============================//

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err); // Log the error
  res.status(500).json({ error: "Internal Server Error" });
});

// Export the app instance for use in other files
module.exports = app;
