const express = require('express');
const { calculateDiscount } = require('../controller/discountController');
const router = express.Router();

// Could move validation logic to a middleware function. It can then be used in other routes :)

router.post('/calculate-discount', (req, res) => {
    const { age, experience } = req.body;
    if (typeof age !== 'number' || typeof experience !== 'number' || age < 0 || experience < 0) {
        return res.status(400).json({ error: "Invalid input" });
    }

    const discount = calculateDiscount(age, experience);
    res.json({ discount_rate: discount });
});

module.exports = router;

// Awesome work!!
