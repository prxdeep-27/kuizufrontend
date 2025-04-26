const express=require('express');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Mongo URI:', process.env.MONGO_URI);  

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Atlas connected');
      } catch (error) {
    console.error('MongoDB Atlas connection error:', error);
    process.exit(1); // Exit the process with failure
  }
  
};
module.exports = connectDB;