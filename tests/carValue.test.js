// Import the function to be tested
import calculateCarValue from "../src/carValue";

// Group related tests under a single describe block
describe("Car Value API Tests", () => {
    // Test for a valid input scenario
    test("Sunny day scenario - Civic 2020", () => {
        expect(calculateCarValue("Civic", 2020)).toEqual({ car_value: 6620 });
    });

    // Test for a model containing only numbers
    test("Model with numbers only is allowed - 911, 2020", () => {
        expect(calculateCarValue("911", 2020)).toEqual({ car_value: 2020 });
    });

    // Test for a negative year input
    test("Negative year should return an error", () => {
        expect(calculateCarValue("Task-Force", -987)).toEqual({ error: "there is an error" });
    });

    // Test for a non-numeric year input
    test("Year is not numeric - should return an error", () => {
        expect(calculateCarValue("C200", "twenty twenty")).toEqual({ error: "there is an error" });
    });

    // Test for an empty model input
    test("Empty model input should return an error", () => {
        expect(calculateCarValue("", 2020)).toEqual({ error: "there is an error" });
    });

    // Test for a model with special characters
    test("Model with special characters should be ignored", () => {
        expect(calculateCarValue("Ferr@ri", 2023)).toEqual({ car_value: 9523 });
    });

    // Test for a null model input
    test("Null model input should return an error", () => {
        expect(calculateCarValue(null, 2018)).toEqual({ error: "there is an error" });
    });

    // Test for a null year input
    test("Null year input should return an error", () => {
        expect(calculateCarValue("BMW", null)).toEqual({ error: "there is an error" });
    });

    // Test for a model with leading and trailing spaces
    test("Model with spaces should still work", () => {
        expect(calculateCarValue("  Mustang  ", 2021)).toEqual({ car_value: 11521 });
    });

    // Test for a single-letter model name
    test("Single-letter model name should work - A, 2000", () => {
        expect(calculateCarValue("A", 2000)).toEqual({ car_value: 2100 });
    });

    // Test for a long model name
    test("Long model name should still work - Lamborghini, 2015", () => {
        expect(calculateCarValue("Lamborghini", 2015)).toEqual({ car_value: 12815 });
    });

    // Test for a model with mixed case letters
    test("Model with mixed case should still work - bMw, 2019", () => {
        expect(calculateCarValue("bMw", 2019)).toEqual({ car_value: 5819 });
    });

    // Test for a model with extra spaces
    test("Model with extra spaces should be trimmed - '  Tesla  ', 2022", () => {
        expect(calculateCarValue("  Tesla  ", 2022)).toEqual({ car_value: 7722 });
    });

    // Test for a model with both numbers and letters
    test("Model with numbers and letters - C300, 2018", () => {
        expect(calculateCarValue("C300", 2018)).toEqual({ car_value: 2618 });
    });

    // Test for a model with special characters and spaces
    test("Model with special characters and spaces - P@r$ch3, 2017", () => {
        expect(calculateCarValue("P@r$ch3", 2017)).toEqual({ car_value: 6817 });
    });

    // Test for a future year input
    test("Future year should return an error - Audi, 3000", () => {
        expect(calculateCarValue("Audi", 3000)).toEqual({ error: "There is an error" });
    });

    // Test for a model that is an empty string with spaces
    test("Model is an empty string with spaces - '   ', 2020", () => {
        expect(calculateCarValue("   ", 2020)).toEqual({ error: "There is an error" });
    });
});