
import calculateCarValue from "../../src/carValue.js";

describe("Car Value API Tests", () => {

    // Test for a valid input scenario
    test("Correct vehicle model and year input", () => {
        expect(calculateCarValue("Civic", 2020)).toEqual({ car_value: 6620 });
    });

    // Test for a model with special characters
    test("Model with special characters should be ignored", () => {
        expect(calculateCarValue("Ferr@ri", 2023)).toEqual({ car_value: 9423 });
    });

    // Test for a null year input
    test("Null year input should return an error", () => {
        expect(calculateCarValue("BMW", null)).toEqual({ error: "carModel and year are required" });
    });

    // Test for a model with leading and trailing spaces
    test("Model with spaces should still work", () => {
        expect(calculateCarValue("  Mustang  ", 2021)).toEqual({ car_value: 11521 });
    });

    // Test for a model with mixed case letters
    test("Model with mixed case should still work - bMw, 2019", () => {
        expect(calculateCarValue("bMw", 2019)).toEqual({ car_value: 5819 });
    });
});