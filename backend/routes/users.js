const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create a new user
router.post('/', (req, res) => {
  const { name, email, images, phone, code } = req.body;
  const sql = 'INSERT INTO user (name, email, images, phone, code) VALUES (?, ?, ?, ?, ?)';
  pool.query(sql, [name, email, images, phone, code], (err, result) => {
    if (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    console.log('User created successfully');
    res.status(201).json({ message: 'User created successfully' });
  });
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM user');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
