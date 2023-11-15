// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

// Create a user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Create a user model
const User = mongoose.model('User', userSchema);

// Handle login POST request
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  User.findOne({ username: username, password: password }, (error, user) => {
    if (error) {
      res.status(500).json({ success: false });
    } else if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
