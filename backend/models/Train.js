const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  name: String,
  departure: String,
  arrival: String,
  date: String,
  coaches: [
    {
      coachNumber: Number,
      seats: [
        { number: Number, status: { type: String, enum: ["vacant", "booked"] } },
      ],
    },
  ],
});

module.exports = mongoose.model("Train", trainSchema);
