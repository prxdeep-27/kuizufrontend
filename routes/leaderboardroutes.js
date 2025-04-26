// backend/routes/leaderboard.js
const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/leaderboard'); // your Mongoose model

router.get('/:category', async (req, res) => {
  const category = req.params.category.toLowerCase();
  try {
    const res = await Leaderboard.find({ category }).sort({ score: -1 }).limit(10);
    res.json(res.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching leaderboard', error });
  }
});

module.exports = router;
