// auth.js

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Secret key for JWT
const secretKey = 'your-secret-key'; // Replace with your actual secret key

// Dummy database to store user information (replace with your database)
const users = [];

// Handle POST request for user sign-up
router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Check if user with the same email already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  // Create a new user object and add it to the database
  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);

  // Generate JWT for the new user
  const token = jwt.sign({ id: newUser.id, email: newUser.email }, secretKey);

  // Return the token in the response
  res.json({ token });
});

// Handle POST request for user login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email and password (replace with your authentication logic)
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate JWT for the user
  const token = jwt.sign({ id: user.id, email: user.email }, secretKey);

  // Return the token in the response
  res.json({ token });
});

module.exports = router;
