const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Set up initial admin during server start (run once)
const seedAdmin = async () => {
    try {
        const adminUser = process.env.ADMIN_USERNAME || 'admin';
        const adminPass = process.env.ADMIN_PASSWORD || 'admin123';

        const adminExists = await Admin.findOne({ username: adminUser });
        if (!adminExists) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(adminPass, salt);
            const admin = new Admin({ username: adminUser, password: hashedPassword });
            await admin.save();
            console.log(`Seed Admin User created: username=${adminUser} password=***`);
        }
    } catch (error) {
        console.error('Seed Admin error:', error);
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const payload = { adminId: admin._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { login, seedAdmin };
