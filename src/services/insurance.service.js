function calculateMonthlyAndYearlyPremium(carValue, riskRating) {
  // Validate inputs
  if (carValue <= 0 || typeof carValue !== "number") {
    return { error: "Invalid car value" }
  }

  if (riskRating < 1 || riskRating > 5) {
    return { error: "Invalid risk rating" }
  }

  const yearlyPremium = (carValue * riskRating) / 100
  const monthlyPremium = yearlyPremium / 12

  return {
    monthlyPremium: parseFloat(monthlyPremium.toFixed(2)),
    yearlyPremium: parseFloat(yearlyPremium.toFixed(2)),
  }
}

module.exports = {
  calculateMonthlyAndYearlyPremium,
}
