// app.js

const express = require('express');
const authRoutes = require('./auth');

const app = express();

// Use the authentication routes from the separate auth.js file
app.use('/auth', authRoutes);

// Other routes and middleware...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
