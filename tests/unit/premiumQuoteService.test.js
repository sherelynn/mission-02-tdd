const {
  calculateMonthlyAndYearlyPremium,
} = require("../../src/services/premiumQuoteService")

// This test suite verifies the functionality of calculating monthly and yearly insurance premiums based on various inputs such as car value and risk rating, including edge cases.
describe("Premium Quote: Calculate Monthly and Yearly Premium", () => {
  // Standard Case
  test("car value is 5000 and risk rating is 5", () => {
    const carValue = 5000
    const riskRating = 5
    const result = calculateMonthlyAndYearlyPremium(carValue, riskRating)
    expect(result).toStrictEqual({ monthlyPremium: 20.83, yearlyPremium: 250 })
  })

  // Car Value Edge Cases
  describe("Car Value Edge Cases", () => {
    describe.each([
      ["zero", 0],
      ["negative", -5000],
      ["string", "5000"],
      ["null", null],
      ["undefined", undefined],
    ])("when car value is %s", (label, carValue) => {
      test(`should reject car value that is ${label}`, () => {
        const riskRating = 5
        const result = calculateMonthlyAndYearlyPremium(carValue, riskRating)
        expect(result).toMatchObject({ error: "Invalid car value" })
      })
    })
  })

  // Risk Rating Edge Cases
  describe("Risk Rating Edge Cases", () => {
    describe.each([
      ["below minimum", 0],
      ["above maximum", 6],
      ["string", "5"],
      ["null", null],
      ["undefined", undefined],
    ])("when risk rating is %s", (label, riskRating) => {
      test(`should reject car value that is ${label}`, () => {
        const carValue = 5000
        const result = calculateMonthlyAndYearlyPremium(carValue, riskRating)
        expect(result).toMatchObject({ error: "Invalid risk rating" })
      })
    })
  })
})
