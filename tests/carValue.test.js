const calculateCarValue = require("../src/carValue");

describe("Car Value API Tests", () => {
    test("Sunny day scenario - Civic 2020", () => {
        expect(calculateCarValue("Civic", 2020)).toEqual({ car_value: 6620 });
    });

    test("Model with numbers only is allowed - 911, 2020", () => {
        expect(calculateCarValue("911", 2020)).toEqual({ car_value: 2020 });
    });

    test("Negative year should return an error", () => {
        expect(calculateCarValue("Task-Force", -987)).toEqual({ error: "there is an error" });
    });

    test("Year is not numeric - should return an error", () => {
        expect(calculateCarValue("C200", "twenty twenty")).toEqual({ error: "there is an error" });
    });

    test("Empty model input should return an error", () => {
        expect(calculateCarValue("", 2020)).toEqual({ error: "there is an error" });
    });

    test("Boundary case: year = 0", () => {
        expect(calculateCarValue("Civic", 0)).toEqual({ car_value: 4600 });
    });

    test("Model with special characters should be ignored", () => {
        expect(calculateCarValue("Ferr@ari", 2023)).toEqual({ car_value: 9523 });
    });

    test("Null model input should return an error", () => {
        expect(calculateCarValue(null, 2018)).toEqual({ error: "there is an error" });
    });

    test("Null year input should return an error", () => {
        expect(calculateCarValue("BMW", null)).toEqual({ error: "there is an error" });
    });

    test("Model with spaces should still work", () => {
        expect(calculateCarValue("  Mustang  ", 2021)).toEqual({ car_value: 11521 });
    });

    test("Single-letter model name should work - A, 2000", () => {
        expect(calculateCarValue("A", 2000)).toEqual({ car_value: 2100 });
    });

    test("Long model name should still work - Lamborghini, 2015", () => {
        expect(calculateCarValue("Lamborghini", 2015)).toEqual({ car_value: 12815 });
    });

    test("Model with mixed case should still work - bMw, 2019", () => {
        expect(calculateCarValue("bMw", 2019)).toEqual({ car_value: 5819 });
    });

    test("Model with extra spaces should be trimmed - '  Tesla  ', 2022", () => {
        expect(calculateCarValue("  Tesla  ", 2022)).toEqual({ car_value: 7722 });
    });

    test("Model with numbers and letters - C300, 2018", () => {
        expect(calculateCarValue("C300", 2018)).toEqual({ car_value: 2618 });
    });

    test("Model with special characters and spaces - P@r$ch3, 2017", () => {
        expect(calculateCarValue("P@r$ch3", 2017)).toEqual({ car_value: 6817 });
    });

    test("Future year should return an error - Audi, 3000", () => {
        expect(calculateCarValue("Audi", 3000)).toEqual({ error: "Year not found" });
    });

    test("Model is an empty string with spaces - '   ', 2020", () => {
        expect(calculateCarValue("   ", 2020)).toEqual({ error: "there is an error" });
    });
});
