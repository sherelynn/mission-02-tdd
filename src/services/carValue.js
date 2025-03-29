const calculateCarValue = (carModel, year) => {
  if (!carModel || !year) {
    throw new Error("Car model is required")
  }
  if (typeof year !== "number") {
    throw new Error("Invalid year format")
  }

  const cleanedModel = carModel.replace(/[^a-zA-Z]/g, "").toLowerCase()

  let value = 0
  for (let i = 0; i < cleanedModel.length; i++) {
    value += (cleanedModel.charCodeAt(i) - 97 + 1) * 100
  }

  value += year
  return value
}

module.exports = calculateCarValue
