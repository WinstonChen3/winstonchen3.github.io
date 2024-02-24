const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const crypto = require('crypto');

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

// Generate a secure random string for the session secret
const sessionSecret = crypto.randomBytes(64).toString('hex');

// Auth0 configuration
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: sessionSecret,
  baseURL: 'https://winstonchen3.netlify.app',
  clientID: 'nS0Jzh2vyrIxdmNbNdeqA5OX70chzFjC',
  issuerBaseURL: 'https://dev-3vbcg1e8pz1ss47s.us.auth0.com'
};

// Middleware to handle authentication
app.use(auth(config));

// Define a protected route using requiresAuth middleware
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// Define other routes
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
