
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quizRoutes = require('../routes/quizRoutes');
const scoreRoutes = require('../routes/scoreRoutes');



const app = express();
const PORT = 3004;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/quizdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(' MongoDB connected'))
.catch((err) => console.error(' MongoDB connection error:', err));






app.use('/api/quizzes', quizRoutes);
app.use('/api/scores', scoreRoutes);


app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

