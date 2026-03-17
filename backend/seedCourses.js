const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const CourseView = require('./models/CourseView');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/project_smile?directConnection=true')
    .then(async () => {
        console.log('MongoDB connected for seeding...');

        // Education 1-7 (base ~ 2000-2800)
        const eduCourses = [
            { id: '1', views: 2598 }, { id: '2', views: 2356 }, { id: '3', views: 2789 },
            { id: '4', views: 2345 }, { id: '5', views: 2457 }, { id: '6', views: 2758 }, { id: '7', views: 2104 }
        ];

        // Training t_1 to t_21 (base ~ 2300-3100)
        const trainCourses = [
            { id: 't_1', views: 2387 }, { id: 't_2', views: 2785 }, { id: 't_3', views: 2845 },
            { id: 't_4', views: 2985 }, { id: 't_5', views: 2845 }, { id: 't_6', views: 2985 },
            { id: 't_7', views: 2954 }, { id: 't_8', views: 3045 }, { id: 't_9', views: 2754 },
            { id: 't_10', views: 2968 }, { id: 't_11', views: 3120 }, { id: 't_12', views: 2977 },
            { id: 't_13', views: 2645 }, { id: 't_14', views: 2845 }, { id: 't_15', views: 2973 },
            { id: 't_16', views: 3019 }, { id: 't_17', views: 3124 }, { id: 't_18', views: 2879 },
            { id: 't_19', views: 2986 }, { id: 't_20', views: 3014 }, { id: 't_21', views: 3124 }
        ];

        // Language lang_1 to lang_5 (base ~ 30-110)
        const langCourses = [
            { id: 'lang_1', views: 104 }, { id: 'lang_2', views: 98 }, { id: 'lang_3', views: 45 },
            { id: 'lang_4', views: 86 }, { id: 'lang_5', views: 37 }
        ];

        const allCourses = [...eduCourses, ...trainCourses, ...langCourses];

        for (let course of allCourses) {
            let existing = await CourseView.findOne({ courseId: course.id });
            if (!existing) {
                await CourseView.create({ courseId: course.id, views: course.views });
                console.log(`Seeded ${course.id}`);
            }
        }

        console.log('Seeding complete.');
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
