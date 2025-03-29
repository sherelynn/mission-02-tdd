function calculateDiscount(age, experience) {
  let discount = 0
  if (age >= 25) discount += 5
  if (experience >= 5) discount += 5
  if (age >= 40) discount += 5
  if (experience >= 10) discount += 5
  return Math.min(discount, 20)
}

module.exports = { calculateDiscount }

// Code is looking really good!! Could also use else if -
// if (age >= 40) {
//      discount += 10;
//  } else if (age >= 25) {
//      discount += 5;
//  }
// Can make it easier to modify if you add more conditions :)
