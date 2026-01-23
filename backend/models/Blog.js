const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true
    },
    content: {
        type: String,
        required: [true, 'Please add content']
    },
    author: {
        type: String,
        required: [true, 'Please add an author']
    },
    image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80'
    },
    category: {
        type: String,
        required: [true, 'Please add a category'],
        enum: ['Events', 'Food', 'Culture', 'Restaurant', 'Offers']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Blog', blogSchema);
