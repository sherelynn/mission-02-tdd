const {
  calculateMonthlyAndYearlyPremium,
} = require("../../src/services/premiumQuoteService")

// This test suite verifies the functionality of calculating monthly and yearly insurance premiums based on various inputs such as car value and risk rating, including edge cases.
describe("Premium Quote Service", () => {
  // Constants to match service
  const MIN_CAR_VALUE = 500
  const MAX_CAR_VALUE = 100000000
  const MIN_RISK_RATING = 1
  const MAX_RISK_RATING = 5
  const VALID_CAR_VALUE = 5000
  const VALID_RISK_RATING = 5

  describe("Valid Inputs", () => {
    test("calculates premium correctly for standard values", () => {
      const result = calculateMonthlyAndYearlyPremium(5000, 5)

      expect(result.monthlyPremium).toBeCloseTo(20.83, 2)
      expect(result.yearlyPremium).toBeCloseTo(250, 2)
    })

    test("calculates premium correctly for minimum valid values", () => {
      const result = calculateMonthlyAndYearlyPremium(
        MIN_CAR_VALUE,
        MIN_RISK_RATING
      )

      expect(result.monthlyPremium).toBeCloseTo(0.42, 2)
      expect(result.yearlyPremium).toBeCloseTo(5, 2)
    })
  })

  // Car Value Edge Cases
  describe("car value validation", () => {
    const expectedError = { error: "Invalid car value" }

    // Test cases
    describe.each([
      ["zero", 0],
      ["negative", -VALID_CAR_VALUE],
      ["string", String(VALID_CAR_VALUE)],
      ["below minimum", MIN_CAR_VALUE - 1],
      ["above maximum", MAX_CAR_VALUE + 1],
      ["null", null],
      ["undefined", undefined],
    ])("when car value is %p", (label, carValue) => {
      test(`should reject car value that is ${label}`, () => {
        const result = calculateMonthlyAndYearlyPremium(
          carValue,
          VALID_RISK_RATING
        )
        expect(result).toMatchObject(expectedError)
      })
    })
  })

  // Risk Rating Edge Cases
  describe("risk rating validation", () => {
    const expectedError = { error: "Invalid risk rating" }

    // Test cases
    describe.each([
      ["below minimum", MIN_RISK_RATING - 1],
      ["above maximum", MAX_RISK_RATING + 1],
      ["negative", -VALID_RISK_RATING],
      ["string", String(VALID_RISK_RATING)],
      ["float", MIN_RISK_RATING + 0.5],
      ["null", null],
      ["undefined", undefined],
    ])("when risk rating is %s", (label, riskRating) => {
      test(`should reject risk rating that is ${label}`, () => {
        const result = calculateMonthlyAndYearlyPremium(
          VALID_CAR_VALUE,
          riskRating
        )
        expect(result).toMatchObject(expectedError)
      })
    })
  })

  test("returns correct error when both inputs are invalid", () => {
    const result = calculateMonthlyAndYearlyPremium(null, null)
    expect(result).toHaveProperty("error")
  })
})
