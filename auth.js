const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Person = require('./model/person');
// Passport local strategy for authentication with validation
passport.use(new localStrategy(async (username, password, done) => {
    if (!username || !password) {
        return done(null, false, { message: 'Missing username or password' });
    }
    try {
        const user = await Person.findOne({ username: username });
        if (!user) {
            return done(null, false, { message: 'Incorrect username' });
        }
        const isPasswordCorrect = await user.comparePassword(password);
        if (isPasswordCorrect) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password' });
        }
    } catch (err) {
        return done(err);
    }
}));

//comment added
const x = 9;
module.exports = passport;