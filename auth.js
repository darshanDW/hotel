const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./model/person'); // Adjust the path as needed
// Passport local strategy for authentication with validation
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        // console.log('Received credentials:', username, password);
        const user = await Person.findOne({ username });
        if (!user)
            return done(null, false, { message: 'Incorrect username.' });

        const isPasswordMatch = await user.comparePassword(password);
        if (isPasswordMatch)
            return done(null, user);
        else
            return done(null, false, { message: 'Incorrect password.' })
    } catch (error) {
        return done(error);
    }
}));

//comment added
const x = 9;
module.exports = passport;