const express = require("express");
const { bookVehicle } = require("../controllers/booking.controller");
const router = express.Router();

router.route("/").post(bookVehicle);

module.exports = router;
