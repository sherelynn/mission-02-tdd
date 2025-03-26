function calculateCarValue(model, year) {
  // Check if model is a string and year is a valid number
  if (!model || typeof model !== "string" || typeof year !== "number" || year < 0) {
    return { error: "there is an error" };
  }

  // If the model contains only numbers, return the year as the value
  if (/^\d+$/.test(model)) {
    return { car_value: year };
  }

  // Trim spaces and remove special characters (keep only letters)
  const cleanModel = model.trim().replace(/[^a-zA-Z]/g, "").toUpperCase();

  // If the cleaned model is empty after removing special characters, return an error
  if (cleanModel.length === 0) {
    return { error: "there is an error" };
  }

  // Calculate value: Sum letter positions (A=1, B=2, ..., Z=26)
  let modelValue = [...cleanModel].reduce((sum, char) => sum + (char.charCodeAt(0) - 64), 0);

  // Return the car value: (Sum of model value * 100) + year
  return { car_value: modelValue * 100 + year };
}

module.exports = calculateCarValue;
