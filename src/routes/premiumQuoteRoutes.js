const express = require("express")
const router = express.Router()
const premiumQuoteController = require("../controllers/premiumQuoteController")

router.post("/calculate-premium", premiumQuoteController.calculatePremium)

module.exports = router
