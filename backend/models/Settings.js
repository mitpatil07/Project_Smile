const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
    eventTimerDate: {
        type: Date,
        default: new Date('2025-09-15T16:40:00Z'),
    },
    videoUrlId: {
        type: String,
        default: 'aUkgcHGo_8c',
    },
    videoViews: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

module.exports = mongoose.model('Settings', SettingsSchema);
