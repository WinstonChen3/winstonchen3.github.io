const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user.js');

// POST /api/auth/register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // TODO check if each username is present
    // TODO check if each email is present and valid
    // TODO check if each password is present

    try {
        // Check if the username or email already exists in the database
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Username or email already exists' });
        }

        // Create a new user instance
        const newUser = new User({ username, email, password });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

router.get('/login', (req, resp) =>{
    if (req.session.passport && req.session.passport.user) {
        // resp.render('../makerspace/views/index.ejs');
        resp.render('index.html');
    }
    else {
        // resp.render('../makerspace/views/login.ejs');
        resp.render('login.html');
    }
})

// POST /api/auth/login
router.post('/login', passport.authenticate('local', 
    { 
        successRedirect: '/', 
        failureRedirect:'/api/auth/login', 
        failureFlash:true 
    }
)); 

// POST /api/auth/logout
router.post('/logout', async (req, res) => {
    res.logout();
    res.redirect('/');
    // const { email } = req.body;

    // TODO check if each email is present and valid
    // TODO check if each password is present

    // try {
    //     // Check if email already exists in the database
    //     const existingUser = await User.findOne({ where: { email } });
    //     if (!existingUser) {
    //         return res.status(400).json({ error: 'user not found' });
    //     }

    //     res.status(200).json({ message: 'Logout successful' });
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({ error: 'Logout failed' });
    // }
});

module.exports = router;
