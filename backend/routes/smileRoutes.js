const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const auth = require('../middleware/auth');
const { getSmiles, submitSmile, deleteSmile } = require('../controllers/smileController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const safeName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
        cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(safeName).toLowerCase());
    }
});

const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp|mp4/i;
    const extMatch = filetypes.test(path.extname(file.originalname));
    const mimeMatch = filetypes.test(file.mimetype) || file.mimetype.startsWith('video/') || file.mimetype.startsWith('image/');

    if (extMatch && mimeMatch) {
        return cb(null, true);
    } else {
        cb(new Error(`Validation Error: Invalid file type. Ext: ${path.extname(file.originalname)}, Mime: ${file.mimetype}`));
    }
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
    fileFilter: fileFilter
});

router.get('/', getSmiles);
router.post('/', upload.single('file'), submitSmile);
router.delete('/:id', auth, deleteSmile);

module.exports = router;
