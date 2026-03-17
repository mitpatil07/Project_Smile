const Settings = require('../models/Settings');

// Get Settings
const getSettings = async (req, res) => {
    try {
        let settings = await Settings.findOne();
        if (!settings) {
            settings = new Settings();
            await settings.save();
        }
        res.json(settings);
    } catch (err) {
        res.status(500).json({ message: 'Server error fetching settings' });
    }
};

// Update Settings
const updateSettings = async (req, res) => {
    const { eventTimerDate, videoUrlId } = req.body;
    try {
        let settings = await Settings.findOne();
        if (!settings) settings = new Settings();

        if (eventTimerDate) settings.eventTimerDate = eventTimerDate;
        if (videoUrlId) settings.videoUrlId = videoUrlId;

        await settings.save();
        res.json(settings);
    } catch (err) {
        res.status(500).json({ message: 'Server error updating settings' });
    }
};

// Increment Video Views
const incrementVideoViews = async (req, res) => {
    try {
        let settings = await Settings.findOne();
        if (!settings) settings = new Settings();

        settings.videoViews += 1;
        await settings.save();

        res.json({ views: settings.videoViews });
    } catch (err) {
        res.status(500).json({ message: 'Server error updating views' });
    }
};

module.exports = {
    getSettings,
    updateSettings,
    incrementVideoViews
};
