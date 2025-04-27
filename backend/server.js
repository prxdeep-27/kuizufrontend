


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./server1');



const quizRoutes = require('../routes/quizRoutes');
const scoreRoutes = require('../routes/scoreRoutes');
const authroutes = require('../routes/authroutes');

const app = express();
const PORT = process.env.PORT || 3004;

connectDB(); // connect to Atlas

// Middleware
app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/quizdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/quizzes', quizRoutes);
app.use('/api/scores', scoreRoutes);
app.use('/api/auth', authroutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});