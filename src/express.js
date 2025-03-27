
const express = require('express'); // Import the Express framework
const app = express(); // Create an Express application
const port = 3000; // Define the port for the server

app.use(express.json()); // Middleware to parse incoming JSON requests

// POST endpoint to calculate car value
app.post('/car-value', (req, res) => {
    const { carModel, year } = req.body; // Extract carModel and year from the request body

    // Validate that both carModel and year are provided
    if (!carModel || !year) {
        return res.status(400).json({ error: "carModel and year are required" }); // Return a 400 error if validation fails
    }

    // Calculate the car value using the helper function
    const carValue = calculateCarValue(carModel, year);

    // Respond with the calculated car value
    res.status(200).json({ car_value: carValue });
});

/**
 * Helper function to calculate the car value based on model name and year.
 * 
 * @param {string} model - The car model (can include letters, numbers, and special characters).
 * @param {number} year - The manufacturing year of the car.
 * @returns {number} - The calculated car value.
 */
function calculateCarValue(model, year) {
    // Ensure both model and year are provided
    if (!model || !year) {
        throw new Error("Both model and year are required");
    }

    // Remove special characters from the model and convert to lowercase
    model = model.replace(/[^a-zA-Z]/g, "").toLowerCase();

    let value = 0;

    // Calculate the car value based on the sum of the letters' positions in the alphabet
    for (let char of model) {
        value += (char.charCodeAt(0) - 96) * 100; // a=1, b=2, ..., multiplied by 100
    }

    // Add the year to the calculated value
    return value + year;
}

// Only start the server if this file is run directly
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Main server running on port ${port}`); // Log a message when the server starts
    });
}

module.exports = { app }; // Export the app for testing purposes