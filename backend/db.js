// db.js

const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'New_Password123!',
  database: 'account',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool for use in your application
module.exports = pool.promise();
