const express = require("express")
const {
  calculateCarValueHandler,
} = require("../controllers/carValueController")
const router = express.Router()

router.post("/api/v1/calculate-car-value", calculateCarValueHandler)

module.exports = router
