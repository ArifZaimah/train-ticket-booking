const db = require("./db");

(async () => {
  try {
    const [rows] = await db.query("CREATE DATABASE IF NOT EXISTS train_booking");
    console.log("Database created or already exists:", rows);
    process.exit(0); // Exit the script
  } catch (err) {
    console.error("Error creating database:", err.message);
    process.exit(1); // Exit with an error
  }
})();
