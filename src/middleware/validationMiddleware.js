const validateDiscountInput = (req, res, next) => {
    const { age, experience } = req.body;
  
    if (typeof age !== "number" || typeof experience !== "number" || age < 0 || experience < 0) {
        console.error("Invalid input:", { age, experience }); 
        return res.status(400).json({ error: "Invalid input" });
      }
  
    // If validation passes, move on to the next middleware or route handler
    next();
  };
  
  module.exports = validateDiscountInput;