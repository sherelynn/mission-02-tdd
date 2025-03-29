const express = require("express");
const { calculateDiscount } = require("../controllers/discountController");
const validateDiscountInput = require("../middleware/validationMiddleware");
const router = express.Router();

// Discount calculation API
router.post("/calculate-discount", validateDiscountInput, (req, res) => {
  const { age, experience } = req.body;


  try {
    // Calculate discount
    const discount = calculateDiscount(age, experience);
    res.json({ discount_rate: discount });
  } catch (error) {
    console.error("Error calculating discount:", error); 
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;