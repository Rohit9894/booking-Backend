const express = require("express");
const { bookVehicle } = require("../controllers/booking.controller");
const router = express.Router();

router.route("/").get(bookVehicle);

module.exports = router;
