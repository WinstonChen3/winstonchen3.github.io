const jwt = require('jsonwebtoken');

// Replace this with your actual secret key (keep it secure!)
const secretKey = 'your_secret_key';

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

module.exports = { authenticateToken };
