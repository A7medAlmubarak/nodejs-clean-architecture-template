const express = require('express'); 
const courseRoutes = require('./course/course.route.js'); 

const router = express.Router();

router.use('/course', courseRoutes); 

module.exports = router; 
