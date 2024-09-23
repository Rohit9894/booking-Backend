const express = require("express");
const { createVehicle } = require("../controllers/vehicle.controller");
const router = express.Router();

router.route("/").get(createVehicle);

module.exports = router;
