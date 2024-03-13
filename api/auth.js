const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Replace this with your actual secret key (keep it secure!)
const secretKey = 'b8c1f3d2f2a33c93561d4b14b06d4a6edc52c049e2f0ebd50e833cfb038c07d9';

// Example user database (replace with your actual user authentication logic)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Route for user login and JWT token generation
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

// Middleware to authenticate JWT tokens
function authenticateToken(req, res, next) {
  // Get the token from the authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
    // Store the user information in the request object for further processing
    req.user = user;
    next();
  });
}

// Example protected route (requires valid JWT token)
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully', user: req.user });
});

module.exports = router;
