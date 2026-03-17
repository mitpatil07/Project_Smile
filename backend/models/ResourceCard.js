const mongoose = require('mongoose');

const ResourceCardSchema = new mongoose.Schema({
    category: {
        type: String, // 'training', 'education', 'language'
        required: true,
        enum: ['training', 'education', 'language']
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String, // URL or imported path (for backwards compatibility)
        required: true,
    },
    link: {
        type: String, // Document url, video url, course url
        required: true,
    },
    level: {
        type: String, // Beginner, Intermediate, Advanced, etc.
    },
    duration: {
        type: String, // 6 Weeks, 7 videos, etc.
    },
    students: {
        type: Number, // Base views
        default: 0,
    },
    language: {
        type: String, // e.g., Hindi → English
    },
    gradient: {
        type: String, // Tailwind gradient class for language cards
    }
}, { timestamps: true });

module.exports = mongoose.model('ResourceCard', ResourceCardSchema);
