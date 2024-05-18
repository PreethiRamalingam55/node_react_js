const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all sliders
router.get('/', async (req, res) => {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM sliders');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new slider
router.post('/', async (req, res) => {
  const { title, description, image_url } = req.body;

  try {
    const [result] = await pool.query('INSERT INTO sliders (title, description, image_url) VALUES (?, ?, ?)', [title, description, image_url]);
    res.status(201).json({
      id: result.insertId,
      title,
      description,
      image_url
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
module.exports = router;
