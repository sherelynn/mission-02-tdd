function calculateDiscount(age, experience) {
  let discount = 0

  console.log("Age:", age, "Experience:", experience); 

  // Validate input
  if (typeof age !== "number" || typeof experience !== "number" || age < 0 || experience < 0) {
    throw new Error("Invalid input")
  }

  // Apply discounts
  if (age >= 40) {
    discount += 10;
  } else if (age >= 25) {
    discount += 5;
  }

  if (experience >= 10) {
    discount += 10;
  } else if (experience >= 5) {
    discount += 5;
  }

  // Max discount is 20%
  return Math.min(discount, 20);
}

module.exports = { calculateDiscount };