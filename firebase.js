// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const firebaseAdmin = require('firebase-admin');

// Initialize Express app
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize Firebase Admin SDK with the service account key file
const serviceAccount = require('./goffy.json'); // Replace 'path/to/goffy.json' with the actual path
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  // Other Firebase configurations if needed...
});

// Dummy database to store user information (replace with your database)
const users = [];

// Handle POST request for user sign-up
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Check if user with the same email already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  // Create a new user object and add it to the database
  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);

  // Redirect user to equipment.html after successful sign-up
  res.redirect('/equipment.html');
});

// Handle POST request for user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email (replace this with Firebase Authentication code if using Firebase)
  const user = users.find(user => user.email === email && user.password === password);

  // Check if user exists and password matches
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Redirect user to equipment.html after successful login
  res.redirect('/equipment.html');
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
