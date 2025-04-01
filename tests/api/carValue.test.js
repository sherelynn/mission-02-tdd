
const request = require("supertest")
const app = require("../../src/express")

describe("Car value API tests", () => {
  test("Valid car model and year", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "Civic", year: 2020 })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("car_value")
  })

  // Test for invalid year input (negative year)
  test("Invalid year input should return an error", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "Civic", year: -2020 })
  
    expect(response.status).toBe(400)
    expect(response.body).toStrictEqual({
      error: "Valid year (positive number) is required",
    })
  })

  // ✅ Test for missing carModel and year
  test("Missing carModel and year", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({})

    expect(response.status).toBe(400)
    expect(response.body).toStrictEqual({
      error: "Valid car model (non-empty string) is required",
    })
  })

  // ✅ Test for a model with special characters (should still work)
  test("Car model with special characters", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "Ferr@ri", year: 2023 })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("car_value")
  })

  // ✅ Test for an old car
  test("Very old car model", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "Ford", year: 1950 })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("car_value")
  })

  // Test case: Model with leading/trailing spaces should still work
  test("Model with spaces should still work", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "  Mustang  ", year: 2021 })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("car_value")
  })

  // ✅ Test for a model with mixed case (e.g., "BMw")
  test("Model with mixed case should still work", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "bMw", year: 2019 })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("car_value")
  })
})
