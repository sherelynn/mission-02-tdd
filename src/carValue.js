
/**
 * Function to calculate the value of a car based on its model and year.
 * 
 * @param {string} carModel 
 * @param {number} year 
 * @returns {object} 
 */
function calculateCarValue(carModel, year) {
  if (!carModel || !year) {
    return { error: "carModel and year are required" };
  }

  // Clean the model: remove special characters, trim spaces, and convert to uppercase
  const cleanModel = carModel.trim().replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

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
      modelValue += (char.charCodeAt(0) - 64);
    } else if (/\d/.test(char)) {
      modelValue += parseInt(char, 10);
    }
  }

  // Final calculation: (Sum of model value * 100) + year
  return { car_value: modelValue * 100 + year };
}

module.exports = calculateCarValue;