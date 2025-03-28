
const express = require('express');
const calculateCarValue = require('./src/carValue');  

const app = express();
app.use(express.json());

app.post('/calculate-car-value', (req, res) => {
    const { carModel, year } = req.body;

    try {
        const carValue = calculateCarValue(carModel, year);  
        res.status(200).json({ carValue });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
