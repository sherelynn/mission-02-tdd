
const calculateCarValue = require("../../src/carValue");

describe("Car Value Calculation Tests", () => {

    test("Valid car model and year", () => {
        const result = calculateCarValue("Civic", 2020);
        expect(result).toBe(6620);
    });

    test("Model with special characters should be cleaned", () => {
        const result = calculateCarValue("Ferr@ri", 2023);
        expect(result).toBe(9423);
    });

    test("Model with mixed case should still work", () => {
        const result = calculateCarValue("bMw", 2019);
        expect(result).toBe(5819);
    });

    test("Empty car model should throw an error", () => {
        expect(() => calculateCarValue("", 2020)).toThrow("Car model and year are required");
    });

    test("Year as string should return an error", () => {
        expect(() => calculateCarValue("Civic", "twenty twenty")).toThrow("Invalid year");
    });
});
