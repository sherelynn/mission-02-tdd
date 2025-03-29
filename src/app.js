const express = require("express")
const bodyParser = require("body-parser")
const carValueRoutes = require("./routes/carValueRoutes") // Updated route import
const discountRoute = require("../src/routes/discountRoute")
const premiumQuoteRoutes = require("../src/routes/premiumQuoteRoutes")

// 앱 인스턴스 생성
const app = express()
app.use(bodyParser.json())

app.use(express.json())

//========== ROUTES ==========//
// 할인 계산 API 경로 설정
app.use(carValueRoutes)
app.use("/api/v1", discountRoute)
app.use("/api/v1/quote", premiumQuoteRoutes)
//============================//

// 앱 인스턴스를 외부에서 사용할 수 있도록 export
module.exports = app
