const express = require("express")
const calculateCarValue = require("./carValue") // Assuming this is the path to your carValue.js file in src directory

const app = express()
app.use(express.json())

app.post("/calculate-car-value", (req, res) => {
  const { carModel, year } = req.body

  try {
    const carValue = calculateCarValue(carModel, year)
    res.status(200).json({ carValue })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// 포트 설정
const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
