const express = require("express");
const Booking = require("../models/Booking");
const Train = require("../models/Train");

const router = express.Router();

// Create a new booking
router.post("/", async (req, res) => {
  const { trainId, coachNumber, seatNumbers, passengerCount, bookingDate } = req.body;

  // Update seat statuses in the train document
  const train = await Train.findById(trainId);
  const coach = train.coaches.find((c) => c.coachNumber === coachNumber);
  seatNumbers.forEach((seatNumber) => {
    const seat = coach.seats.find((s) => s.number === seatNumber);
    if (seat) seat.status = "booked";
  });
  await train.save();

  // Create a new booking
  const booking = new Booking({ trainId, coachNumber, seatNumbers, passengerCount, bookingDate });
  await booking.save();

  res.status(201).json(booking);
});

module.exports = router;
