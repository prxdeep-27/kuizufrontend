const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String },
  options: { type: [String] }, // ✅ make sure this is "options", not "option"
  answer: { type: String },
});

const quizSchema = new mongoose.Schema({
  category: { type: String, required: true },
  questions: [questionSchema],
});

// ✅ Prevent OverwriteModelError
const Quiz = mongoose.models.Quiz || mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
