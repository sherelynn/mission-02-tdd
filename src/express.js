
const express = require('express'); 
const app = express(); 
const port = 3000; 

app.use(express.json()); 

// POST endpoint to calculate car value
app.post('/car-value', (req, res) => {
    const { carModel, year } = req.body; 

    if (!carModel || !year) {
        return res.status(400).json({ error: "carModel and year are required" }); 
    }

    const carValue = calculateCarValue(carModel, year);

    res.status(200).json({ car_value: carValue });
});

/**
 * Helper function to calculate the car value based on model name and year.
 * 
 * @param {string} model
 * @param {number} year
 * @returns {number} 
 */
function calculateCarValue(model, year) {
    if (!model || !year) {
        throw new Error("Both model and year are required");
    }

    model = model.replace(/[^a-zA-Z]/g, "").toLowerCase();

    let value = 0;

    for (let char of model) {
        value += (char.charCodeAt(0) - 96) * 100; 
    }
    return value + year;
}

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Main server running on port ${port}`); 
    });
}

module.exports = { app }; 