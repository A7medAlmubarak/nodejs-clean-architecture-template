const Joi = require("joi");
const createCourseSchema = Joi.object({
    title: Joi.string().empty().min(2).trim().required().messages({
        "string.empty": "Title must not be empty.",
        "any.required": "Title is required.",
        "string.min": "Title should have a minimum length of 2 characters.",
    }),

    level: Joi.string().empty().required().messages({
        "string.empty": "Level must not be empty.",
        "any.required": "Level is required.",
    }),

    course_fee: Joi.number().required().messages({
        "any.required": "Course fee is required.",
        "number.base": "Course fee must be a number.",
    }),

    about_the_course: Joi.string().empty().required().messages({
        "string.empty": "About the course must not be empty.",
        "any.required": "About the course is required.",
    }),

    teacher_id: Joi.string().empty().required().messages({
        "string.empty": "teacher id the course must not be empty.",
        "any.required": "teacher id is required.",
    }),
    finished: Joi.boolean().optional(),
});

module.exports = createCourseSchema;
