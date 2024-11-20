const express = require("express");
const cors = require("cors");
const trainRoutes = require("./routes/trainRoutes");

const app = express();
app.use(cors()); // Enable CORS for frontend-backend communication
app.use(express.json()); // Parse incoming JSON requests

// Use the trainRoutes for /api/trains
app.use("/api/trains", trainRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
