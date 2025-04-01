const premiumQuoteService = require("../services/premiumQuoteService")

const calculatePremium = (req, res) => {
  try {
    const { carValue, riskRating } = req.body

    // Validate input with service
    const result = premiumQuoteService.calculateMonthlyAndYearlyPremium(
      carValue,
      riskRating
    )

    // If validation fails, send error response
    if (result.error) {
      return res.status(400).json({ error: result.error })
    }

    // If validation passes, send success response
    return res.status(200).json(result)
  } catch (error) {
    // Handle unexpected errors
    console.error("Error calculating premium:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

module.exports = {
  calculatePremium,
}
