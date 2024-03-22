const mongoose = require('mongoose');

require('dotenv').config();
const mongolocalUrl = process.env.DB_URL;
//const mongoUrl = process.env.DB_URL;
mongoose.connect(mongolocalUrl, {
    useNewUrlParser: true,

    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('connected', () => {
    console.log('connected');
});
db.on('disconnected', () => {
    console.log('disconnected');
});
db.on('error', (err) => {
    console.error('connection error:', err);
});

module.exports = db;
