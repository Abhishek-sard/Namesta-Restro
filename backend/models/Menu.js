const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        trim: true
    },
    category: {
        type: String,
        required: [true, 'Please add a category'],
        enum: ['Starters', 'Main Course', 'Bread & Rice', 'Desserts', 'Drinks']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Menu', menuSchema);
