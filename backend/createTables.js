const db = require("./db"); // Import the MySQL connection pool

(async () => {
  try {
    // Create the trains table
    await db.query(`
      CREATE TABLE IF NOT EXISTS trains (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        departure_time TIME NOT NULL,
        arrival_time TIME NOT NULL,
        travel_date DATE NOT NULL,
        origin VARCHAR(100) NOT NULL,
        destination VARCHAR(100) NOT NULL
      );
    `);
    console.log("Trains table created or already exists.");

    // Create the coaches table
    await db.query(`
      CREATE TABLE IF NOT EXISTS coaches (
        id INT AUTO_INCREMENT PRIMARY KEY,
        train_id INT NOT NULL,
        coach_number INT NOT NULL,
        FOREIGN KEY (train_id) REFERENCES trains(id)
      );
    `);
    console.log("Coaches table created or already exists.");
    //Populate the coaches table
    /*
    await db.query(`
      INSERT INTO coaches (train_id, coach_number)
      SELECT trains.id, coach_num
      FROM trains
      CROSS JOIN (
        SELECT 1 AS coach_num UNION ALL 
        SELECT 2 UNION ALL 
        SELECT 3 UNION ALL 
        SELECT 4 UNION ALL 
        SELECT 5 UNION ALL 
        SELECT 6
      ) AS coach_numbers;
    `);
    console.log("Coaches table populated");*/

    // Create the seats table
    await db.query(`
      CREATE TABLE IF NOT EXISTS seats (
        id INT AUTO_INCREMENT PRIMARY KEY,
        coach_id INT NOT NULL,
        seat_number INT NOT NULL,
        status ENUM('vacant', 'booked') DEFAULT 'vacant',
        FOREIGN KEY (coach_id) REFERENCES coaches(id)
      );
    `);
    console.log("Seats table created or already exists.");

    // Create the bookings table
    await db.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        train_id INT NOT NULL,
        coach_id INT NOT NULL,
        seat_id INT NOT NULL,
        user_name VARCHAR(100) NOT NULL,
        booking_date DATE NOT NULL,
        FOREIGN KEY (train_id) REFERENCES trains(id),
        FOREIGN KEY (coach_id) REFERENCES coaches(id),
        FOREIGN KEY (seat_id) REFERENCES seats(id)
      );
    `);
    console.log("Bookings table created or already exists.");

    console.log("All tables created successfully!");
    process.exit(0); // Exit the script
  } catch (err) {
    console.error("Error creating tables:", err.message);
    process.exit(1); // Exit with error
  }
})();
