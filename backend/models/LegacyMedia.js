const mongoose = require('mongoose');

const LegacyMediaSchema = new mongoose.Schema({
    type: {
        type: String, // 'image' or 'video'
        required: true,
    },
    src: {
        type: String, // URL of the uploaded media
        required: true,
    },
    title: {
        type: String,
        default: 'Legacy Collection'
    }
}, { timestamps: true });

module.exports = mongoose.model('LegacyMedia', LegacyMediaSchema);
