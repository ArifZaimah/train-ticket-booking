import React, { useEffect, useState } from "react";
import axios from "axios";

function Home({ onTrainSelect }) {
  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [error, setError] = useState(null);

  const [filterDate, setFilterDate] = useState("");
  const [filterOrigin, setFilterOrigin] = useState(""); // Selected origin
  const [filterDestination, setFilterDestination] = useState(""); // Selected destination

  const [availableOrigins, setAvailableOrigins] = useState([]);
  const [availableDestinations, setAvailableDestinations] = useState([]);

  // Format the travel_date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  // Fetch train data on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/trains")
      .then((response) => {
        const trainsData = response.data;
        setTrains(trainsData);
        setFilteredTrains(trainsData);

        // Extract unique origins and destinations
        const origins = Array.from(new Set(trainsData.map((train) => train.origin))).filter(Boolean);
        const destinations = Array.from(new Set(trainsData.map((train) => train.destination))).filter(Boolean);

        setAvailableOrigins(origins);
        setAvailableDestinations(destinations);
      })
      .catch((error) => {
        console.error("Error fetching trains:", error);
        setError("Could not load train data. Please try again later.");
      });
  }, []);

  const handleFilter = () => {
    let filtered = trains;

    if (filterDate) {
      filtered = filtered.filter((train) => train.travel_date.startsWith(filterDate));
    }

    if (filterOrigin) {
      filtered = filtered.filter((train) => train.origin === filterOrigin);
    }

    if (filterDestination) {
      filtered = filtered.filter((train) => train.destination === filterDestination);
    }

    setFilteredTrains(filtered);
  };

  const handleSelect = (train) => {
    console.log("Selected Train:", train);
    onTrainSelect(train);
  };

  return (
    <div>
      <h1>Train Ticket Booking</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Filters */}
      <div>
        <label htmlFor="filter-date">Date:</label>
        <input
          id="filter-date"
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        <br />

        <label htmlFor="filter-origin">Origin:</label>
        <select
          id="filter-origin"
          value={filterOrigin}
          onChange={(e) => setFilterOrigin(e.target.value)}
        >
          <option value="">-- Select Origin --</option>
          {availableOrigins.map((origin) => (
            <option key={origin} value={origin}>
              {origin}
            </option>
          ))}
        </select>

        <br />

        <label htmlFor="filter-destination">Destination:</label>
        <select
          id="filter-destination"
          value={filterDestination}
          onChange={(e) => setFilterDestination(e.target.value)}
        >
          <option value="">-- Select Destination --</option>
          {availableDestinations.map((destination) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>

        <br />

        <button onClick={handleFilter}>Filter</button>
      </div>

      <h2>Available Trains</h2>
      {filteredTrains.length > 0 ? (
        <ul>
          {filteredTrains.map((train) => (
            <li key={train.id}>
              <strong>{train.name}</strong> <br />
              Departure: {train.departure_time} <br />
              Arrival: {train.arrival_time} <br />
              Origin: {train.origin} <br />
              Destination: {train.destination} <br />
              Date: {formatDate(train.travel_date)} <br />
              <button onClick={() => handleSelect(train)}>Select</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No trains available for the selected filters.</p>
      )}
    </div>
  );
}

export default Home;