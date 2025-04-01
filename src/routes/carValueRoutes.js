
const express = require("express")
const {
  calculateCarValueHandler,
} = require("../controllers/carValueController")
const router = express.Router()

router.post("/calculate-car-value", calculateCarValueHandler)

module.exports = router
