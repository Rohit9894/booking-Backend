const Booking = require("../models/booking.model");
const bookVehicle = async (req, res) => {
  try {
    const {
      startDate,
      endDate,
      customerFirstName,
      customerLastName,
      vehicleId,
    } = req.body;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const overlappingBooking = await Booking.findOne({
      vehicle: vehicleId,
      $or: [
        { startDate: { $lt: end, $gte: start } },
        { endDate: { $lte: end, $gt: start } },

        { startDate: { $lte: start }, endDate: { $gte: start } },
        { startDate: { $lte: end }, endDate: { $gte: end } },
      ],
    });

    if (overlappingBooking) {
      return res
        .status(400)
        .json({ error: "Vehicle already booked for the selected dates" });
    }

    const booking = new Booking({
      customerFirstName,
      customerLastName,
      startDate: start,
      endDate: end,
      vehicle: vehicleId,
    });

    await booking.save();
    res.status(201).json({ message: "Booking successful!", booking });
  } catch (error) {
    throw new Error(error);
  }
};

const getBookVehicle = async (req, res) => {
  try {
    const data = await Booking.find({});
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { bookVehicle, getBookVehicle };
