function calculateMonthlyAndYearlyPremium(carValue, riskRating) {
  const MIN_CAR_VALUE = 500
  const MAX_CAR_VALUE = 100000000
  const MIN_RISK_RATING = 1
  const MAX_RISK_RATING = 5
  const BASE_VALUE = 100
  const MONTHS_IN_YEAR = 12

  if (!carValue && !riskRating) {
    return { error: "Missing or invalid parameters" }
  }

  // Validate car value and risk rating to ensure they are within acceptable ranges and of the correct type
  if (
    !carValue ||
    carValue < MIN_CAR_VALUE ||
    carValue > MAX_CAR_VALUE ||
    typeof carValue !== "number"
  ) {
    return { error: "Invalid car value" }
  }

  if (
    !riskRating ||
    riskRating < MIN_RISK_RATING ||
    riskRating > MAX_RISK_RATING ||
    typeof riskRating !== "number" ||
    !Number.isInteger(riskRating)
  ) {
    return { error: "Invalid risk rating" }
  }

  // If conditions are met, calculate the premiums
  const yearlyPremium = (carValue * riskRating) / BASE_VALUE
  const monthlyPremium = yearlyPremium / MONTHS_IN_YEAR

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
