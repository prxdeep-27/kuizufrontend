
const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz'); // ONLY if you're exporting the model from `server1.js`



// router.get('/', async (req, res) => {
//   try {
//     const quizzes = await Quiz.find();
//     res.json(quizzes);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.get('/:category', async (req, res) => {
  try {
    const category = req.params.category.toLowerCase();
    const quiz = await Quiz.findOne({ category: category });
    res.json(quiz);
  } catch (err) {
    res.status(404).json({ error: 'Quiz not found' });
  }
});


// Add a quiz
router.post('/', async (req, res) => {
  try {
    const cleanedCategory = req.body.category.toLowerCase().replace(/\s+/g, '');

    const newQuiz = new Quiz({
      category: cleanedCategory,
      questions: req.body.questions
    });
    
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
