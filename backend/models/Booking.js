const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  trainId: mongoose.Schema.Types.ObjectId,
  coachNumber: Number,
  seatNumbers: [Number],
  passengerCount: Number,
  bookingDate: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
