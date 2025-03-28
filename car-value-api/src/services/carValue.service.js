
function calculateMonthlyAndYearlyPremium(carValue, riskRating) {
  if (typeof carValue !== "number" || typeof riskRating !== "number") {
      return { error: "Car value and risk rating must be numbers" };
  }

  if (carValue <= 0) {
      return { error: "Invalid car value" };
  }

  if (riskRating < 1 || riskRating > 5) {
      return { error: "Invalid risk rating" };
  }

  const yearlyPremium = (carValue * riskRating) / 100;
  const monthlyPremium = yearlyPremium / 12;

  return {
      monthlyPremium: Number(monthlyPremium.toFixed(2)),
      yearlyPremium: Number(yearlyPremium.toFixed(2)),
  };
}

module.exports = { calculateMonthlyAndYearlyPremium };
