
// Import the function to be tested
import calculateCarValue from "../../src/carValue.js";

// Group related tests under a single describe block
describe("Car Value API Tests", () => {

    // Test for a valid input scenario
    test("Correct vehicle model and year input", () => {
        // Expect the function to return the correct car value for valid inputs
        expect(calculateCarValue("Civic", 2020)).toEqual({ car_value: 6620 });
    });

    // Test for a model with special characters
    test("Model with special characters should be ignored", () => {
        // Expect special characters in the model to be removed before calculation
        expect(calculateCarValue("Ferr@ri", 2023)).toEqual({ car_value: 9423 });
    });

    // Test for a null year input
    test("Null year input should return an error", () => {
        // Expect the function to return an error when the year is null
        expect(calculateCarValue("BMW", null)).toEqual({ error: "carModel and year are required" });
    });

    // Test for a model with leading and trailing spaces
    test("Model with spaces should still work", () => {
        // Expect leading and trailing spaces in the model to be trimmed before calculation
        expect(calculateCarValue("  Mustang  ", 2021)).toEqual({ car_value: 11521 });
    });

    // Test for a model with mixed case letters
    test("Model with mixed case should still work - bMw, 2019", () => {
        // Expect the function to normalize the case of the model before calculation
        expect(calculateCarValue("bMw", 2019)).toEqual({ car_value: 5819 });
    });
});