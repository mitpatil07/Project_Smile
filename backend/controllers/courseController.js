const CourseView = require('../models/CourseView');

// Get all course views
const getCourseViews = async (req, res) => {
    try {
        const views = await CourseView.find();
        // Return as a map { '1': 100, '2': 250 }
        const viewMap = {};
        views.forEach(v => {
            viewMap[v.courseId] = v.views;
        });
        res.json(viewMap);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Increment view
const incrementCourseView = async (req, res) => {
    const { id } = req.params;
    const { baseViews } = req.body; // base views are no longer added to db, but still accepted for backwards compatibility

    try {
        let courseView = await CourseView.findOne({ courseId: id });
        if (!courseView) {
            courseView = new CourseView({ courseId: id, views: 1 });
        } else {
            courseView.views += 1;
        }
        await courseView.save();
        res.json({ courseId: id, views: courseView.views });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
// Background job to artificially increment views to simulate real-time traffic
const startViewSimulator = () => {
    const runSimulator = async () => {
        try {
            const courses = await CourseView.find();
            if (courses.length > 0) {
                // Randomly pick exactly 1 video to receive a view
                const randomIndex = Math.floor(Math.random() * courses.length);
                const selectedCourse = courses[randomIndex];

                selectedCourse.views += 1;
                await selectedCourse.save();
            }
        } catch (err) {
            console.error('[Simulator] Error simulating views:', err);
        }

        // Schedule next random view between 10 and 30 seconds from now
        // This will average ~4,320 views total per day across the site
        // That is exactly ~130 views per individual course card per day
        const nextIntervalMs = Math.floor(Math.random() * 20000) + 10000;
        setTimeout(runSimulator, nextIntervalMs);
    };

    // Kick off the simulator
    setTimeout(runSimulator, 5000);
    console.log(`[Simulator] Highly-realistic random view simulator started.`);
};

module.exports = { getCourseViews, incrementCourseView, startViewSimulator };
