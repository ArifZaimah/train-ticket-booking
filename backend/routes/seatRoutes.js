const express = require("express");
const router = express.Router();
const db = require("../db");

// Fetch all seats for a specific coach
router.get("/:coachId", async (req, res) => {
    const { coachId } = req.params;

    try {
        const [rows] = await db.query(
            "SELECT * FROM seats WHERE coach_id = ?",
            [coachId]
        );
        res.status(200).json(rows);
    } catch (err) {
        console.error("Error fetching seats:", err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
