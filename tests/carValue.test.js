import calculateCarValue from "../src/carValue"; // Import the function to be tested

// Group related tests for the `calculateCarValue` function
describe("Car Value API Tests", () => {
    // Test for a valid model and year
    test("Model with correct information", () => {
        // Expect the function to calculate the correct car value for a valid model and year
        expect(calculateCarValue("Civic", 2020)).toEqual({ car_value: 6620 });
    });

    // Test for an empty model input
    test("Empty model input should return an error", () => {
        // Expect the function to return an error when the model is an empty string
        expect(calculateCarValue("", 2020)).toEqual({ error: "there is an error" });
    });

    // Test for a model containing special characters
    test("Model with special characters should be ignored", () => {
        // Expect the function to ignore special characters and calculate the car value correctly
        expect(calculateCarValue("Ferr@ri", 2023)).toEqual({ car_value: 9423 });
    });

    // Test for a model with leading and trailing spaces
    test("Model with spaces should still work", () => {
        // Expect the function to trim spaces and calculate the car value correctly
        expect(calculateCarValue("  Mustang  ", 2021)).toEqual({ car_value: 11521 });
    });

    // Test for a model with mixed case letters
    test("Model with mixed case should still work", () => {
        // Expect the function to handle mixed case letters and calculate the car value correctly
        expect(calculateCarValue("bMw", 2019)).toEqual({ car_value: 5819 });
    });
});