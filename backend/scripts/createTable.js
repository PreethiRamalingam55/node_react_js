const pool = require('../db'); // Assuming db.js is in the parent directory

async function createTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS sliders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image_url VARCHAR(255) NOT NULL
    )
  `;

  try {
    const [results] = await pool.query(createTableQuery);
    console.log('Table "sliders" created or already exists.');
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    await pool.end(); // End the pool after creating the table
  }
}

createTable();
