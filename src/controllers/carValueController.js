const calculateCarValue = require("../services/carValue")

function calculateCarValueHandler(req, res) {
  try {
    const { carModel, year } = req.body

    // Validate the inputs
    if (!carModel || !year) {
      return res.status(400).json({ error: "Car model and year are required" })
    }

    // Clean the model name (remove special characters, trim spaces)
    const cleanedCarModel = carModel
      .trim()
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
    const carValue = calculateCarValue(cleanedCarModel, year)

    // Return the calculated value
    return res.status(200).json({ car_value: carValue })
  } catch (error) {
    console.error("Error in car value calculation:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

module.exports = { calculateCarValueHandler }
