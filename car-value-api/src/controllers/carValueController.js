
const calculateCarValue = require("../../../src/carValue");

function calculateCarValueHandler(req, res) {
    try {
        const { carModel, year } = req.body;

        // 🚨 Validate inputs
        if (!carModel || !year) {
            return res.status(400).json({ error: "carModel and year are required" });
        }

        // 🏎️ Calculate car value using the provided car model and year
        const { car_value, error } = calculateCarValue(carModel, year);
        
        // Log the car model, year, and calculated car value for debugging
        console.log("Car Model:", carModel);
        console.log("Year:", year);
        console.log("Calculated Car Value:", car_value);

        if (error) {
            return res.status(400).json({ error });
        }

        // 📤 Send response with the calculated car value
        res.status(200).json({
            car_value, // Car value calculated from model and year
        });

    } catch (error) {
        console.error("Error in calculateCarValueHandler:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { calculateCarValueHandler };
