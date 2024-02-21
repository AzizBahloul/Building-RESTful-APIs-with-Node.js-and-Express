const express = require('express');
const app = express();
const dbConnect = require('./db/dbConnect');
const User = require('./db/userModel');

// Connect to MongoDB
dbConnect();

// Create a new user
const createUser = async () => {
  try {
    const newUser = new User({
      email: 'siaziz@gmail.com',
      password: '123456'
    });
    await newUser.save();
    console.log('User created');
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

createUser(); // Call the function to create a user

module.exports = app;
