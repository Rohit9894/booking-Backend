const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  customerFirstName: {
    type: String,
    required: true,
  },
  customerLastName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,  
    required: true,
  },
  endDate: {
    type: Date,  
    required: true,
  },
  vehicle: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Vehicle',
    required: true,
  },
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;
