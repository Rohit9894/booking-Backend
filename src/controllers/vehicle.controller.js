const Vehicle = require("../models/vehicle.model");
const createVehicle = async (req, res) => {
  try {
    const { wheels } = req.query;
    const vehicleType = wheels === "2" ? "bike" : "car";
    const data = await Vehicle.find({ vehicleType });
    res.send(data);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createVehicle,
};
