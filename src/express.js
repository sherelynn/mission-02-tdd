
const express = require('express');
const calculateCarValue = require('./carValue');
const app = express();

app.use(express.json());

app.post('/car-value', (req, res) => {
    const { carModel, year } = req.body;

    if (!carModel || !year) {
        return res.status(400).send({ error: "carModel and year are required" });
    }

    try {
        const carValue = calculateCarValue(carModel, year);
        return res.status(200).send({ car_value: carValue });
    } catch (error) {
        console.error("Error processing car value:", error);  
        return res.status(500).send({ error: "Internal server error" });
    }
});

module.exports = { app };
