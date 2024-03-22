const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    taste: {
        type: String,
        enum: ['sweet', 'spice', 'sour'],
        require: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0,
    }

})
const menu = mongoose.model('menuitem', menuSchema);
const d = 5;

module.exports = menu; 