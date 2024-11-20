import React from "react";

function TrainSelection({ train, onCoachSelect, onBack }) {
    const handleCoachSelect = (coach) => {
        console.log("Selected Coach:", coach);
        onCoachSelect(coach); // Pass selected coach to App.js
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB"); // Format as DD/MM/YYYY
    };

    const mockCoaches = [
        { id: 1, coachNumber: "A" },
        { id: 2, coachNumber: "B" },
        { id: 3, coachNumber: "C" },
        { id: 4, coachNumber: "D" },
        { id: 5, coachNumber: "E" },
        { id: 6, coachNumber: "F" },
    ];

    return (
        <div>
            <h1>Train Selection</h1>
            <h2>Train Details</h2>
            <p>Name: {train.name}</p>
            <p>Departure Time: {train.departure_time}</p>
            <p>Arrival Time: {train.arrival_time}</p>
            <p>Origin: {train.origin}</p>
            <p>Destination: {train.destination}</p>
            <p>Travel Date: {formatDate(train.travel_date)}</p>

            <h2>Select a Coach</h2>
            <ul>
                {mockCoaches.map((coach) => (
                    <li key={coach.id}>
                        Coach: {coach.coachNumber}
                        <button onClick={() => handleCoachSelect(coach)}>
                            Select
                        </button>
                    </li>
                ))}
            </ul>
            <button onClick={onBack}>Back to Train List</button>
        </div>
    );
}

export default TrainSelection;
