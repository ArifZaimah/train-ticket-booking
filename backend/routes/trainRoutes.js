const express = require("express");
const router = express.Router(); // Initialize the router
const db = require("../db"); // Import database connection

// Example route to get all trains
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM trains");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example search route
router.get("/search", async (req, res) => {
  const { origin, destination, date } = req.query;

  try {
    // Add your search logic here
    const [rows] = await db.query(
      `SELECT * FROM trains WHERE departure_time BETWEEN ? AND ?`,
      [`${date} 00:00:00`, `${date} 23:59:59`]
    );
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; // Export the router.
