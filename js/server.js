const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Temporary in-memory user database
const users = [
    { id: 1, email: 'user@example.com', password: 'password123' }
];

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user by email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ success: true, token });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
