import React from "react";

function SeatSelection({ train, coach, onBack }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // Format as DD/MM/YYYY
  };
    return (
        <div>
            <h1>Seat Selection</h1>
            <h2>Train Details</h2>
            <p>Name: {train.name}</p>
            <p>Coach: {coach.coachNumber}</p>
            <p>Departure Time: {train.departure_time}</p>
            <p>Arrival Time: {train.arrival_time}</p>
            <p>Origin: {train.origin}</p>
            <p>Destination: {train.destination}</p>
            <p>Travel Date: {formatDate(train.travel_date)}</p>

            <h2>Available Seats</h2>
            <p>Coming Soon!</p>

            <button onClick={onBack}>Back to Coach Selection</button>
        </div>
    );
}

export default SeatSelection;
