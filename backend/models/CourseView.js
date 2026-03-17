const mongoose = require('mongoose');

const CourseViewSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unique: true
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('CourseView', CourseViewSchema);
