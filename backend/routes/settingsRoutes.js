const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getSettings, updateSettings, incrementVideoViews } = require('../controllers/settingsController');

// Public route to get landing page settings
router.get('/', getSettings);

// Public route to increment views
router.post('/view', incrementVideoViews);

// Protected route to update timer/video
router.put('/', auth, updateSettings);

module.exports = router;
