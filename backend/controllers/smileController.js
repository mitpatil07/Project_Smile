const Smile = require('../models/Smile');

const getSmiles = async (req, res) => {
    try {
        const smiles = await Smile.find().sort({ createdAt: -1 });
        res.json(smiles);
    } catch (err) {
        res.status(500).json({ message: 'Server error fetching smiles' });
    }
};

const submitSmile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const isVideo = req.file.mimetype.startsWith('video/');
        const srcPath = `/uploads/${req.file.filename}`;

        const newSmile = new Smile({
            name: req.body.name,
            location: req.body.location,
            story: req.body.story,
            fileUrl: srcPath,
            fileType: isVideo ? 'video' : 'image'
        });

        const savedSmile = await newSmile.save();
        res.status(201).json(savedSmile);
    } catch (err) {
        res.status(500).json({ message: 'Server error submitting smile' });
    }
};

const deleteSmile = async (req, res) => {
    try {
        const smile = await Smile.findByIdAndDelete(req.params.id);
        if (!smile) return res.status(404).json({ message: 'Smile not found' });
        res.json({ message: 'Smile deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error deleting smile' });
    }
};

module.exports = { getSmiles, submitSmile, deleteSmile };
