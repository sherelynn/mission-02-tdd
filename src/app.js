const express = require("express")
const bodyParser = require("body-parser")
const carValueRoutes = require("./routes/carValueRoutes") 
const discountRoute = require("../src/routes/discountRoute")
const premiumQuoteRoutes = require("../src/routes/premiumQuoteRoutes")

// Create an instance of the app
const app = express()
app.use(bodyParser.json())

app.use(express.json())

//========== ROUTES ==========//
// Set the route for the discount calculation API
app.use(carValueRoutes)
app.use("/api/v1", discountRoute)
app.use("/api/v1/quote", premiumQuoteRoutes)

//============================//

app.use((err, req, res, next) => {
    console.error("Unhandled error:", err);  // 로그 추가
    res.status(500).json({ error: "Internal Server Error" });
  });

// Export the app instance for use in other files
module.exports = app
