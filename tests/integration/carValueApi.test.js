
const request = require("supertest"); // Import supertest for HTTP assertions
const { app } = require("../../src/express"); // Import the Express app from express.js
const calculateCarValue = require("../../src/carValue.js"); // Import the calculateCarValue function

// Group related tests for the Car Value API
describe("Car Value API Tests", () => {
  // Test case: Valid car model and year input
  test("Correct vehicle model and year input", async () => {
    const response = await request(app)
      .post("/car-value") // Send a POST request to the /car-value endpoint
      .send({ carModel: "Civic", year: 2020 }); // Provide valid carModel and year in the request body

    expect(response.status).toBe(200); // Expect HTTP status 200 (success)
    expect(response.body.car_value).toBe(6620); // Expect the calculated car value to match
  });

  // Test case: Model with special characters should be cleaned
  test("Model with special characters should be ignored", async () => {
    const response = await request(app)
      .post("/car-value")
      .send({ carModel: "Ferr@ri", year: 2023 }); // Provide a model with special characters

    expect(response.status).toBe(200); // Expect HTTP status 200 (success)
    expect(response.body.car_value).toBe(9423); // Expect the calculated car value to match
  });

  // Test case: Null year input should return an error
  test("Null year input should return an error", async () => {
    const response = await request(app)
      .post("/car-value")
      .send({ carModel: "BMW", year: null }); // Provide a null year in the request body

    expect(response.status).toBe(400); // Expect HTTP status 400 (bad request)
    expect(response.body.error).toBe("carModel and year are required"); // Expect an appropriate error message
  });

  // Test case: Model with leading/trailing spaces should still work
  test("Model with spaces should still work", async () => {
    const response = await request(app)
      .post("/car-value")
      .send({ carModel: "  Mustang  ", year: 2021 }); // Provide a model with spaces

    expect(response.status).toBe(200); // Expect HTTP status 200 (success)
    expect(response.body.car_value).toBe(11521); // Expect the calculated car value to match
  });

  // Test case: Model with mixed case should still work
  test("Model with mixed case should still work", async () => {
    const response = await request(app)
      .post("/car-value")
      .send({ carModel: "bMw", year: 2019 }); // Provide a model with mixed case

    expect(response.status).toBe(200); // Expect HTTP status 200 (success)
    expect(response.body.car_value).toBe(5819); // Expect the calculated car value to match
  });
});