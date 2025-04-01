
const express = require("express");
const { calculateCarValue } = require("./services/carValue");
const carValueRoutes = require("./routes/carValueRoutes");
const discountRoute = require("../src/routes/discountRoute");
const premiumQuoteRoutes = require("../src/routes/premiumQuoteRoutes");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define the car value route
app.post("/api/v1/calculate-car-value", (req, res) => {
  const { carModel, year } = req.body;

  // Check if carModel and year are provided
  if (!carModel || !year) {
    return res.status(400).send({ error: "Car model and year are required" });
  }

  // Validate the year
  if (typeof year !== "number" || year <= 0) {
    return res.status(400).send({ error: "Invalid year" });
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
app.use("/api/v1", carValueRoutes);
app.use("/api/v1", discountRoute);
app.use("/api/v1/quote", premiumQuoteRoutes);

// Error handling middleware (should be last)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Define the port
const PORT = process.env.PORT || 3000;

// Only start the server if not in test mode
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for testing
module.exports = app;
