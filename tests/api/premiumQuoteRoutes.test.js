const request = require("supertest")
const app = require("../../src/express")

describe("POST /api/v1/quote/calculate-premium", () => {
  // Test Case 1: Standard Case: Within expected range
  test("should calculate monthly and yearly premium correctly", async () => {
    const response = await request(app)
      .post("/api/v1/quote/calculate-premium")
      .send({ carValue: 5000, riskRating: 5 })

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      monthlyPremium: 20.83,
      yearlyPremium: 250,
    })
  })

  // Test Case 2: Edge Case: Invalid Car Values (zero, negative, string, below minimum, above maximum, null, undefined)
  test.each([[0], [-5000], ["5000"], 499, 100000001])(
    "should return error when car value is %p",
    async carValue => {
      const response = await request(app)
        .post("/api/v1/quote/calculate-premium")
        .send({ carValue, riskRating: 5 })

      expect(response.status).toBe(400)
      expect(response.body).toEqual({
        error: "Invalid car value",
      })
    }
  )

  // Test Case 3: Edge Case: Risk Rating Invalid Type and Out of Range (below minimum: zero | negative, above maximum, string, float, null, undefined)
  test.each([[0], [-1], [6], ["3"], [3.5]])(
    "should return error when risk rating is %p",
    async riskRating => {
      const response = await request(app)
        .post("/api/v1/quote/calculate-premium")
        .send({ carValue: 5000, riskRating })

      expect(response.status).toBe(400)
      expect(response.body).toEqual({
        error: "Invalid risk rating",
      })
    }
  )

  // Test Case 5: Edge Case: Missing parameters
  test.each([
    [{ carValue: 5000 }, { error: "Invalid risk rating" }],
    [{ riskRating: 5 }, { error: "Invalid car value" }],
    [{}, { error: "Invalid parameters" }],
  ])(
    "should return error when parameters are missing: %p ",
    async (requestBody, expectedError) => {
      const response = await request(app)
        .post("/api/v1/quote/calculate-premium")
        .send(requestBody)

      expect(response.status).toBe(400)
      expect(response.body.error).toBeTruthy()
    }
  )
})
