
const request = require("supertest")
const app = require("../../src/express")

// Group related tests for the Car Value API
describe("Car Value API Tests", () => {
  test("Correct vehicle model and year input", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "Civic", year: 2020 })

    expect(response.status).toBe(200)
    expect(response.body.car_value).toBe(6620)
  })

  // Test case: Model with special characters should be cleaned
  test("Model with special characters should be ignored", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "Ferr@ri", year: 2023 })

    expect(response.status).toBe(200)
    expect(response.body.car_value).toBe(9423)
  })

  // Test case: Null year input should return an error
  test("Null year input should return an error", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "BMW", year: null })

    expect(response.status).toBe(400)
    expect(response.body.error).toBe("Valid year (positive number) is required")
  })

  // Test case: Model with leading/trailing spaces should still work
  test("Model with spaces should still work", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "  Mustang  ", year: 2021 })

    expect(response.status).toBe(200)
    expect(response.body.car_value).toBe(11521)
  })

  // Test case: Model with mixed case should still work
  test("Model with mixed case should still work", async () => {
    const response = await request(app)
      .post("/api/v1/calculate-car-value")
      .send({ carModel: "bMw", year: 2019 })

    expect(response.status).toBe(200)
    expect(response.body.car_value).toBe(5819)
  })
})
