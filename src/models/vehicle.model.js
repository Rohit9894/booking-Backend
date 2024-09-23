const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  vehicleType: {
    type: String,
    required: true,
    enum: ["car", "bike"],
  },
  subtype: {
    type: String,
    required: true,
    enum: ["hatchback", "suv", "sedan", "cruiser", "sports"],
  },
  available: {
    type: Boolean,
    default: true,
  },
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = Vehicle;
