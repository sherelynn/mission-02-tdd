const express = require("express")
const router = express.Router()
const insuranceController = require("../controllers/insuranceController")

router.post("/", insuranceController.calculatePremium)

module.exports = router
