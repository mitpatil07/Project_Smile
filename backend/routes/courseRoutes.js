const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getCourseViews, incrementCourseView, resetCourseViews } = require('../controllers/courseController');

router.get('/views', getCourseViews);
router.post('/:id/view', incrementCourseView);
router.delete('/views/reset', auth, resetCourseViews);

module.exports = router;
