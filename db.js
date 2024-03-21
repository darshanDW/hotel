const mongoose = require('mongoose');
const mongourl = 'mongodb://localhost:27017/hotel';

mongoose.connect(mongourl, {
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
