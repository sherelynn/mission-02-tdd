
/**
 * Function to calculate the value of a car based on its model and year.
 * 
 * @param {string} carModel - The car model (can include letters, numbers, and special characters).
 * @param {number} year - The manufacturing year of the car.
 * @returns {object} - An object containing either the calculated car value or an error message.
 */
function calculateCarValue(carModel, year) {
  // Check if both carModel and year are provided
  if (!carModel || !year) {
    return { error: "carModel and year are required" };
  }

  // Clean the model: remove special characters, trim spaces, and convert to uppercase
  const cleanModel = carModel.trim().replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

  // If the cleaned model is empty after removing invalid characters, return an error
  if (cleanModel.length === 0) {
    return { error: "Invalid car model" };
  }

  // If the cleaned model contains only numbers, return the year as the car value
  if (/^\d+$/.test(cleanModel)) {
    return { car_value: year };
  }

  let modelValue = 0;

  // Calculate the model's value by iterating through each character
  for (let char of cleanModel) {
    if (/[A-Z]/.test(char)) {
      // If the character is a letter, add its position in the alphabet (A=1, B=2, ..., Z=26)
      modelValue += (char.charCodeAt(0) - 64);
    } else if (/\d/.test(char)) {
      // If the character is a digit, add its numeric value directly
      modelValue += parseInt(char, 10);
    }
  }

  // Final calculation: (Sum of model value * 100) + year
  return { car_value: modelValue * 100 + year };
}

// Export for use in other files (e.g., for testing)
module.exports = calculateCarValue;