const request = require("supertest")
const app = require("../../src/app")

describe("POST /api/v1/calculate-premium", () => {
  // Test Case 1: Standard Case: Within expected range
  test("should calculate monthly and yearly premium correctly", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-premium")
      .send({ carValue: 5000, riskRating: 5 })

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      monthlyPremium: 20.83,
      yearlyPremium: 250,
    })
  })

  // Test Case 2: Edge Case: Car value is 0
  test.todo("should return error when car value is 0")

  // Test Case 3: Edge Case: Risk rating out of range
  test.todo("should return error when risk rating is out of range")

  // Test Case 4: Edge Case: Invalid types
  test.todo("should return error when car value or risk rating is invalid")

  // Test Case 5: Edge Case: Missing parameters
  test.todo("should return error when parameters are missing")
})
