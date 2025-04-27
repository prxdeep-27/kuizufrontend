// models/Score.js
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  username: { type: String, required: true },
  category: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const scores = mongoose.model('Score', scoreSchema);
module.exports = scores;
