const {
  calculateMonthlyAndYearlyPremium,
} = require("../../src/services/insurance.service")

// This test suite verifies the functionality of calculating monthly and yearly insurance premiums based on various inputs such as car value and risk rating, including edge cases.
describe("Insurance Service: Calculate Monthly and Yearly Premium", () => {
  // Test Case 1: Standard Input: Within expected range
  test("car value is 5000 and risk rating is 5", () => {
    const carValue = 5000
    const riskRating = 5
    const result = calculateMonthlyAndYearlyPremium(carValue, riskRating)
    expect(result).toStrictEqual({ monthlyPremium: 20.83, yearlyPremium: 250 })
  })

  // Test Case 2: Edge Case: Car value is 0
  test("car value is 0 and risk rating is 5", () => {
    const carValue = 0
    const riskRating = 5
    const result = calculateMonthlyAndYearlyPremium(carValue, riskRating)
    expect(result).toStrictEqual({ error: "Car value cannot be zero" })
  })

  // Test Case 3: Edge Case: Car value is negative
  test.todo("car value is -5000 and risk rating is 5")

  // Test Case 4: Edge Case: Risk rating is below minimum
  test.todo("car value is 5000 and risk rating is 0")

  // Test Case 5: Edge Case: Risk rating is above maximum
  test.todo("car value is 5000 and risk rating is 6")

  // Test Case 6: Edge Case: Car value is a string
  test.todo("car value is '5000' and risk rating is 5")

  // Test Case 7: Edge Case: Risk rating is a string
  test.todo("car value is 5000 and risk rating is '5'")

  // Test Case 8: Edge Case: Car value is null
  test.todo("car value is null and risk rating is 5")

  // Test Case 9: Edge Case: Risk rating is null
  test.todo("car value is 5000 and risk rating is null")

  // Test Case 10: Edge Case: Car value is undefined
  test.todo("car value is undefined and risk rating is 5")

  // Test Case 11: Edge Case: Risk rating is undefined
  test.todo("car value is 5000 and risk rating is undefined")
})
