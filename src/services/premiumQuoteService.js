function calculateMonthlyAndYearlyPremium(carValue, riskRating) {
  const minCarValue = 1
  const minRiskRating = 1
  const maxRiskRating = 5
  const baseValue = 100
  const monthsInYear = 12

  // Validate car value and risk rating to ensure they are within acceptable ranges and of the correct type
  if (!carValue || carValue < minCarValue || typeof carValue !== "number") {
    return { error: "Invalid car value" }
  }

  if (
    !riskRating ||
    riskRating < minRiskRating ||
    riskRating > maxRiskRating ||
    typeof riskRating !== "number"
  ) {
    return { error: "Invalid risk rating" }
  }

  const yearlyPremium = (carValue * riskRating) / baseValue
  const monthlyPremium = yearlyPremium / monthsInYear

  // Helper function to format numbers to two decimal places
  function formatToTwoDecimals(value) {
    return parseFloat(value.toFixed(2))
  }

  return {
    yearlyPremium: formatToTwoDecimals(yearlyPremium),
    monthlyPremium: formatToTwoDecimals(monthlyPremium),
  }
}

module.exports = {
  calculateMonthlyAndYearlyPremium,
}
