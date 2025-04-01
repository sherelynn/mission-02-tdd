
const express = require("express");
const calculateCarValue = require("./carValue");

const app = express();
app.use(express.json());

app.post("/calculate-car-value", (req, res) => {
  const { carModel, year } = req.body;

  // Check if carModel and year are provided
  if (!carModel || !year) {
    return res.status(400).json({ error: "carModel and year are required" });
  }

  try {
    const carValue = calculateCarValue(carModel, year);
    res.status(200).json({ car_value: carValue }); // Update to match test expectations
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PORT~
const PORT = process.env.PORT || 3000;

// Only start the server if not in test mode
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for testing
module.exports = { app };
