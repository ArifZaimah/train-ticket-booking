import React from "react";

function CoachSelection({ coaches, onSelectCoach }) {
  return (
    <div>
      <h2>Select a Coach</h2>
      {coaches.map((coach, index) => (
        <div key={index}>
          <p>Coach {coach}</p>
          <button onClick={() => onSelectCoach(coach)}>Select Coach</button>
        </div>
      ))}
    </div>
  );
}

export default CoachSelection;
