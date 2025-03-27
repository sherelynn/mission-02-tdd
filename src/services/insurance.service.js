function calculateMonthlyAndYearlyPremium(carValue, riskRating) {
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
