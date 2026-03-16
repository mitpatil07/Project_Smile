const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
const { getLegacyMedia, uploadLegacyMedia, deleteLegacyMedia } = require('../controllers/legacyMediaController');

// Set up Multer Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
    }
});

const upload = multer({ storage: storage });

// Routes
router.get('/', getLegacyMedia);
router.post('/', [auth, upload.single('media')], uploadLegacyMedia);
router.delete('/:id', auth, deleteLegacyMedia);

module.exports = router;
