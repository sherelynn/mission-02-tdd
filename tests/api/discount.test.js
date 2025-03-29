const request = require("supertest");
const app = require("../../src/app");

describe("Discount API Tests", () => {
  const testCases = [
    { age: 30, experience: 6, expectedStatus: 200, expectedDiscount: 10 },
    // { age: -1, experience: 6, expectedStatus: 400, expectedError: "Invalid input" }, // Invalid age
    { age: 24, experience: 4, expectedStatus: 200, expectedDiscount: 0 },
    { age: 40, experience: 6, expectedStatus: 200, expectedDiscount: 15 },
    { age: 45, experience: 12, expectedStatus: 200, expectedDiscount: 20 }
    // { age: "twenty", experience: "six", expectedStatus: 400, expectedError: "Invalid input" } // Invalid age and experience
  ];

  testCases.forEach(({ age, experience, expectedStatus, expectedDiscount, expectedError }) => {
    test(`Discount for age: ${age}, experience: ${experience}`, async () => {
      const response = await request(app)
        .post("/api/v1/calculate-discount")
        .send({ age, experience });

      expect(response.status).toBe(expectedStatus);

      if (expectedDiscount !== undefined) {
        expect(response.body.discount_rate).toBe(expectedDiscount);
      }

      if (expectedError) {
        expect(response.body.error).toBe(expectedError);
      }
    });
  });
});