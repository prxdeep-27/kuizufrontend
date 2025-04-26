// scoreRoutes.js
const express = require('express');
const router = express.Router();
const Score=require('../models/scores')

// POST: Save a new score
router.post('/', async (req, res) => {
  try {
    const newScore = new Score(req.body);
    await newScore.save();
    res.status(201).json(newScore);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


//  Top 10 scores 
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;

    const query = category ? { category } : {};
    const scores = await Score.find(query).sort({ score: -1, date: 1 }).limit(10);

    res.json(scores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
