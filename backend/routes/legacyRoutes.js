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
        // Enforce safe filename, random prefix, and force lowercase extension
        const safeName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
        cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(safeName).toLowerCase());
    }
});

// Strict File Filter (Prevent RCE Uploads)
const fileFilter = (req, file, cb) => {
    // Allowed extensions
    const filetypes = /jpeg|jpg|png|webp|mp4/;
    // Extract extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime type
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Security Error: Invalid file type. Only JPG, PNG, WEBP, and MP4 are allowed!'));
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
    fileFilter: fileFilter
});

// Routes
router.get('/', getLegacyMedia);
router.post('/', [auth, upload.single('media')], uploadLegacyMedia);
router.delete('/:id', auth, deleteLegacyMedia);

module.exports = router;
