
const express = require("express");
const { calculateCarValue } = require("../services/carValue"); 
const router = express.Router();

router.post("/calculate-car-value", (req, res) => { 
  const { carModel, year } = req.body;

  // --- Validation ---
  if (!carModel || typeof carModel !== 'string' || !carModel.trim()) {
    return res.status(400).send({ error: "Valid car model (non-empty string) is required" });
  }
  // ... other validations ...
  if (!year || typeof year !== "number" || year <= 0 ) {
      return res.status(400).send({ error: "Valid year (positive number) is required" });
  }

  // --- Business Logic ---
  try {
    const carValue = calculateCarValue(carModel.trim(), year);
    return res.status(200).send({ car_value: carValue });
  } catch (error) {
    console.error(`Error processing car value for model "${carModel}", year ${year}:`, error);
    return res.status(500).send({ error: "Internal server error calculating car value" });
  }
});

module.exports = router;