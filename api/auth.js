const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Replace this with your actual secret key (keep it secure!)
const secretKey = 'your_secret_key';

// Example user database (replace with your actual user authentication logic)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Example: Check if the username and password are valid
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

  // Send the token as a response
  res.json({ token });
});

module.exports = router;
