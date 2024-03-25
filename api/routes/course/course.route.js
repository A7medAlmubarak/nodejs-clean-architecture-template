const courseController = require("../../controllers/course.controller");
const express = require("express");
const router = express.Router();
const Validator = require("../../request/validateRequest");
const unitRoutes = require('./unit.route.js'); 

router.post("/", Validator("courseStore"), courseController.create);
router.get("/", courseController.index);
router.delete("/:id", courseController.remove);
router.get("/:id", courseController.show);
router.put("/:id", Validator("courseUpdate"), courseController.update);
router.get("/level/:level_id", courseController.getLevelCourse);

router.use('/:course_id/unit', (req, res, next) => {
    req.course_id = req.params.course_id; // Store for unitRoutes
    next();
}, unitRoutes);

module.exports = router;
