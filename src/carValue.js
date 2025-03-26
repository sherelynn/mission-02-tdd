/**
 * Function to calculate the value of a car based on its model and year.
 * 
 * @param {string} model - The car model (can include letters, numbers, and special characters).
 * @param {number} year - The manufacturing year of the car.
 * @returns {object} - An object containing either the calculated car value or an error message.
 */
function calculateCarValue(model, year) {
  // Validate inputs: model must be a non-empty string, year must be a valid number within a reasonable range.
  if (!model || typeof model !== 'string' || !year || typeof year !== 'number' || year < 0 || year > new Date().getFullYear()) {
    return { error: "there is an error" }; // Return error if inputs are invalid.
  }

  // If the model contains only numbers, return the year as the car value.
  if (/^\d+$/.test(model)) {
    return { car_value: year };
  }

  // Clean the model string: remove leading/trailing spaces and special characters, keep only letters and numbers.
  const cleanModel = model.trim().replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

  // If the cleaned model is empty after removing special characters, return an error.
  if (cleanModel.length === 0) {
    return { error: "there is an error" };
  }

  // Initialize a variable to store the calculated model value.
  let modelValue = 0;

  // Loop through each character in the cleaned model string.
  for (let i = 0; i < cleanModel.length; i++) {
    let char = cleanModel[i];

    // If the character is a letter, calculate its position in the alphabet (A=1, B=2, ..., Z=26) and add it to the model value.
    if (/[A-Z]/.test(char)) {
      modelValue += (char.charCodeAt(0) - 64); // Subtract 64 from the ASCII value of the letter to get its position.
    } 
    // If the character is a number, add its numeric value directly to the model value.
    else if (/\d/.test(char)) {
      modelValue += parseInt(char);
    }
  }

  // Calculate the final car value: (Sum of model value * 100) + year.
  return { car_value: modelValue * 100 + year };
}

// Export the function for use in other files (e.g., for testing).
module.exports = calculateCarValue;