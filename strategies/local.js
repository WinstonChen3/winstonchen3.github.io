const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.js'); // Import your User model here

passport.use(new LocalStrategy(
    {usernameField:"email"},
    async (email, password, callback) => {
        try {
            // Check if email already exists in the database
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) 
                console.log(`found user ${email}`);
            else {
                return callback(null, false, { message: 'user not found' }); 
            }

            // check the password against the database
            const isMatch = await existingUser.comparePassword(password);
            if (!isMatch) { 
                return callback(null, false, { message: 'incorrect password' }); 
            }

            callback(null, existingUser);
        }
        catch (error) {
            return callback(error);
        }
    }
));

passport.serializeUser(function(user, cb) {
    // process.nextTick(function() {
      cb(null, { id: user.user_id, email: user.email, is_admin : user.is_admin });
    // });
  });
  
passport.deserializeUser(function(user, cb) {
    // process.nextTick(function() {
        return cb(null, user);
    // });
});

