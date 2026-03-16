const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String, // E.g. "November 2025" or "Coming Soon"
        required: true,
    },
    type: {
        type: String, // E.g. "Prodcast" or "New Book"
        required: true,
    },
    status: {
        type: String, // E.g. "upcoming" or "Live"
        enum: ['upcoming', 'Live'],
        default: 'upcoming'
    },
    bannertitle: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);
