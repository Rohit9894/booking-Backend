const express = require("express");
const { bookVehicle,getBookVehicle } = require("../controllers/booking.controller");
const router = express.Router();

router.route("/").post(bookVehicle);
router.route("/").get(getBookVehicle);

module.exports = router;
