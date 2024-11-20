import React from "react";

function BookingSummary({ train, coach, seat, passengers, onConfirm }) {
  return (
    <div>
      <h1>Booking Summary</h1>
      <div>
        <h2>Train Details:</h2>
        <p><strong>Name:</strong> {train.name}</p>
        <p><strong>Departure:</strong> {train.departure}</p>
        <p><strong>Arrival:</strong> {train.arrival}</p>
      </div>

      <div>
        <h2>Coach Details:</h2>
        <p><strong>Coach:</strong> {coach}</p>
      </div>

      <div>
        <h2>Seat Details:</h2>
        <p><strong>Seat Number:</strong> {seat.number}</p>
        <p><strong>Status:</strong> {seat.status}</p>
      </div>

      <div>
        <h2>Passengers:</h2>
        <p><strong>Count:</strong> {passengers}</p>
      </div>

      <button onClick={onConfirm}>Confirm Booking</button>
    </div>
  );
}

export default BookingSummary;
