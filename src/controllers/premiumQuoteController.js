const premiumQuoteService = require("../services/premiumQuoteService")

const calculatePremium = (req, res) => {
  try {
    const { carValue, riskRating } = req.body

    // Parse values to number and pass to service
    const result = premiumQuoteService.calculateMonthlyAndYearlyPremium(
      carValue,
      riskRating
    )

    // If error is returned from service, send error response
    if (result.error) {
      return res.status(400).json({ error: result.error })
    }

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
