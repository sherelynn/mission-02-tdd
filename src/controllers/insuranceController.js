const insuranceService = require("../services/insuranceService")

const calculatePremium = (req, res) => {
  try {
    const { carValue, riskRating } = req.body

    // Parse values to number and pass to service
    const result = insuranceService.calculateMonthlyAndYearlyPremium(
      parseFloat(carValue),
      parseFloat(riskRating)
    )

    // Return successful result
    return res.status(200).json(result)
  } catch (error) {
    console.error("Error calculating premium:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

module.exports = {
  calculatePremium,
}
