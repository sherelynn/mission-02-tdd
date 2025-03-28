
const request = require("supertest");
const app = require("../src/app"); 

describe("Insurance Service: Calculate Car Value", () => {

    // ✅ Test with a valid car model and year
    test("Valid car model and year", async () => {
        const response = await request(app)
            .post("/api/v1/calculate-car-value")
            .send({ carModel: "Civic", year: 2020 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("car_value");  // Only checking for car_value now
    });

    // ✅ Test for missing carModel and year
    test("Missing carModel and year", async () => {
        const response = await request(app)
            .post("/api/v1/calculate-car-value")
            .send({});

        expect(response.status).toBe(400);
        expect(response.body).toStrictEqual({ error: "carModel and year are required" });
    });

    // ✅ Test for a model with special characters (should still work)
    test("Car model with special characters", async () => {
        const response = await request(app)
            .post("/api/v1/calculate-car-value")
            .send({ carModel: "Ferr@ri", year: 2023 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("car_value");
    });

    // ✅ Test for an old car
    test("Very old car model", async () => {
        const response = await request(app)
            .post("/api/v1/calculate-car-value")
            .send({ carModel: "Ford", year: 1950 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("car_value");
    });

    // ✅ Test for a model with mixed case (e.g., "BMW")
    test("Model with mixed case should still work", async () => {
        const response = await request(app)
            .post("/api/v1/calculate-car-value")
            .send({ carModel: "bMw", year: 2019 });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("car_value");
    });
});
