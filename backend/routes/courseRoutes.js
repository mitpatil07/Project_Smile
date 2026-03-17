const express = require('express');
const router = express.Router();
const { getCourseViews, incrementCourseView } = require('../controllers/courseController');

router.get('/views', getCourseViews);
router.post('/:id/view', incrementCourseView);

module.exports = router;
