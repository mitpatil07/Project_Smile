const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
// 1. Set Security HTTP Headers (XSS, Clickjacking, etc)
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" } // Allow images/videos to load on frontend
}));

// 2. Data Sanitization against NoSQL query injection
// Express 5.x makes req.query read-only, so we sanitize body and params manually
app.use((req, res, next) => {
    if (req.body) mongoSanitize.sanitize(req.body);
    if (req.params) mongoSanitize.sanitize(req.params);
    next();
});

// 3. Prevent DDoS (Global Limiter: 1000 requests per 15 min per IP)
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: 'Too many requests from this IP, please try again after 15 minutes.'
});
app.use('/api', globalLimiter);

// 4. Restrict CORS (Update 'origin' array with your live frontend domain when deploying)
const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'https://projectsmile.world',
        'https://www.projectsmile.world'
    ],
    credentials: true
};

app.use(cors(corsOptions));
app.options('/*', cors(corsOptions));

app.use(express.json({ limit: '10kb' })); // Limit body payload to 10kb
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure uploads folder exists
if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
    fs.mkdirSync(path.join(__dirname, 'uploads'));
}

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/settings', require('./routes/settingsRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/legacy', require('./routes/legacyRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/resources', require('./routes/resourceRoutes'));
app.use('/api/smiles', require('./routes/smileRoutes'));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        const { seedAdmin } = require('./controllers/authController');
        seedAdmin(); // Create default admin if not exists

        // Seed initial static resource cards if empty
        const { seedResources } = require('./controllers/resourceController');
        seedResources();
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Basic route to test server
app.get('/', (req, res) => {
    res.send('Project Smile Backend API is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
