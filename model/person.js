const mongoose = require('mongoose');
const personschemma = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        require: true,
    },
    mobile: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    salary: {
        type: Number,
        require: true,
    },

    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }

});
const person = mongoose.model('person', personschemma);
module.exports = person;

