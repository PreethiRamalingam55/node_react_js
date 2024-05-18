// db.js

const mysql = require('mysql2');

require('dotenv').config();

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'New_Password123!',
  database: process.env.DB_DATABASE || 'account',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool for use in your application
module.exports = pool.promise();
