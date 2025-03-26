const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of an Express application

// Middleware to parse JSON bodies in incoming requests
app.use(express.json());

// Import the function to calculate car value
const calculateCarValue = require('./carValue'); // Import the car value calculation function

/**
 * POST endpoint to calculate the value of a car.
 * Expects a JSON body with `model` (string) and `year` (number).
 * Returns the calculated car value or an error message.
 */
app.post('/calculate', (req, res) => {
    const { model, year } = req.body; // Extract `model` and `year` from the request body

    // Validate the inputs: Ensure `model` is a string, `year` is a number, and both are within valid ranges
    if (!model || !year || typeof model !== 'string' || typeof year !== 'number' || year < 0 || year > new Date().getFullYear()) {
        return res.status(400).json({ error: "Invalid data" }); // Return a 400 Bad Request error for invalid inputs
    }

    try {
        // Call the car value calculation function with the provided inputs
        const result = calculateCarValue(model, year);
        console.log('Car value calculated:', result); // Log the result to the console
        res.json(result); // Send the result as a JSON response
    } catch (error) {
        // Handle any unexpected errors during the calculation
        console.error('Server error:', error); // Log the error to the console
        return res.status(500).json({ error: "Internal Server Error" }); // Return a 500 Internal Server Error response
    }
});

// Start the server and listen on port 3000
const server = app.listen(3000, () => {
    console.log(`Server is running on port 3000`); // Log a message indicating the server is running
});

// Export the app instance for testing or further use
module.exports = app;