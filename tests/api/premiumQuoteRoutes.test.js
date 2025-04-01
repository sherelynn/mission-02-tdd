const request = require("supertest")
const app = require("../../src/express")

describe("POST /api/v1/quote/calculate-premium", () => {
  // Constants to match service
  const MIN_CAR_VALUE = 500
  const MAX_CAR_VALUE = 100000000
  const MIN_RISK_RATING = 1
  const MAX_RISK_RATING = 5
  const VALID_CAR_VALUE = 5000
  const VALID_RISK_RATING = 5

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

  // Test Case 2: Values at boundaries
  test.each([
    [MIN_CAR_VALUE, MIN_RISK_RATING],
    [MIN_CAR_VALUE, MAX_RISK_RATING],
    [MAX_CAR_VALUE, MIN_RISK_RATING],
    [MAX_CAR_VALUE, MAX_RISK_RATING],
  ])(
    "should accept boundary values: carValue=%p riskRating=%p",
    async (carValue, riskRating) => {
      const response = await request(app)
        .post("/api/v1/quote/calculate-premium")
        .send({ carValue, riskRating })

      expect(response.status).toBe(200)
      expect(response.body).toBeDefined()
    }
  )

  // Test Case 3: Edge Case: Invalid Car Values (zero, negative, string, below minimum, above maximum, null, undefined)
  test.each([
    [0],
    [-VALID_CAR_VALUE],
    [String(VALID_CAR_VALUE)],
    MIN_CAR_VALUE - 1,
    MAX_CAR_VALUE + 1,
    null,
    undefined,
  ])("should return error when car value is %p", async carValue => {
    const response = await request(app)
      .post("/api/v1/quote/calculate-premium")
      .send({ carValue, riskRating: VALID_RISK_RATING })

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      error: "Invalid car value",
    })
  })

  // Test Case 4: Edge Case: Risk Rating Invalid Type and Out of Range (below minimum: zero | negative, above maximum, string, float, null, undefined)
  test.each([
    [0],
    [-VALID_RISK_RATING],
    [MAX_RISK_RATING + 1],
    [String(VALID_RISK_RATING)],
    [MIN_RISK_RATING + 0.5],
    null,
    undefined,
  ])("should return error when risk rating is %p", async riskRating => {
    const response = await request(app)
      .post("/api/v1/quote/calculate-premium")
      .send({ carValue: VALID_CAR_VALUE, riskRating })

    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      error: "Invalid risk rating",
    })
  })

  // Test Case 5: Edge Case: Missing parameters
  test.each([
    [{ carValue: VALID_CAR_VALUE }, { error: "Invalid risk rating" }],
    [{ riskRating: VALID_RISK_RATING }, { error: "Invalid car value" }],
    [{}, { error: "Missing or invalid parameters" }],
  ])(
    "should return error when parameters are missing: %p ",
    async (requestBody, expectedError) => {
      const response = await request(app)
        .post("/api/v1/quote/calculate-premium")
        .send(requestBody)

      expect(response.status).toBe(400)
      expect(response.body).toEqual(expectedError)
    }
  )
})
