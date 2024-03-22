/*var fs = require('fs');
var os = require('os');
var user = os.userInfo();
console.log(user.username);
fs.appendFile('t.txt', 'hi', () => {
    console.log("jdahdhih");
});*/
const express = require('express');
const app = express();
const db = require('./db'); // Assuming this connects to your database
const passport = require('./auth');
const Person = require('./model/person');
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());


// Importing necessary models and routes;

const personroutes = require('./routes/personroutes');
const menuroutes = require('./routes/menuroutes');

// Middleware to log requests
const logrequest = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} Request Made to: ${req.originalUrl}`);
  next();
}
app.use(logrequest);
app.use(passport.initialize());
const lam = passport.authenticate('local', { session: false });

// Mounting routes
app.use('/Person', lam, personroutes);
app.use('/Menu', lam, menuroutes);


// Route for authentication with proper error handling

app.get('/', lam, function (req, res) {
  if (req.user) {
    res.send('Welcome, ' + req.user.username); // You can customize the response
  } else {
    res.status(401).send('Unauthorized');
  }
});
//const PORT = process.env.PORT || 3000;
// Starting the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




