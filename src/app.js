const express = require("express")
const insuranceRoutes = require("./routes/insuranceRoutes")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/v1/calculate-premium", insuranceRoutes)

module.exports = app
