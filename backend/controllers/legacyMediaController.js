const LegacyMedia = require('../models/LegacyMedia');

// Get all media
const getLegacyMedia = async (req, res) => {
    try {
        const media = await LegacyMedia.find().sort({ createdAt: -1 });
        res.json(media);
    } catch (err) {
        res.status(500).json({ message: 'Server error fetching legacy media' });
    }
};

// Upload new media (image or video)
const uploadLegacyMedia = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // basic check for type based on mime
        const isVideo = req.file.mimetype.startsWith('video/');

        // File available at /uploads/filename
        const srcPath = `/uploads/${req.file.filename}`;

        const newMedia = new LegacyMedia({
            type: isVideo ? 'video' : 'image',
            src: srcPath,
            title: req.body.title || 'Legacy Collection'
        });

        const savedMedia = await newMedia.save();
        res.json(savedMedia);
    } catch (err) {
        res.status(500).json({ message: 'Server error uploading legacy media' });
    }
};

// Delete media
const deleteLegacyMedia = async (req, res) => {
    try {
        const media = await LegacyMedia.findByIdAndDelete(req.params.id);
        if (!media) return res.status(404).json({ message: 'Media not found' });
        // In a real app we might want to run fs.unlink here to delete the physical file too
        res.json({ message: 'Media deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error deleting media' });
    }
};

module.exports = { getLegacyMedia, uploadLegacyMedia, deleteLegacyMedia };
