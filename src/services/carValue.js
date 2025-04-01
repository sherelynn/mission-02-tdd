
export function calculateCarValue(carModel, year) {
  if (!carModel || !year) {
    throw new Error("Car model and year are required")
  }

  if (typeof year !== "number" || year <= 0) {
    throw new Error("Invalid year")
  }

  carModel = carModel
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()

  if (carModel.length === 0) {
    throw new Error("Invalid car model")
  }

  let modelValue = 0

  for (let i = 0; i < carModel.length; i++) {
    const letter = carModel.charAt(i)
    const letterValue = letter.charCodeAt(0) - 96
    modelValue += letterValue * 100
  }

  const carValue = modelValue + year
  return carValue
}

module.exports = {calculateCarValue};