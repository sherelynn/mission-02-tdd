function calculateMonthlyAndYearlyPremium(carValue, riskRating) {
  // Validate inputs
  if (carValue <= 0) {
    return { error: "Invalid car value" }
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
