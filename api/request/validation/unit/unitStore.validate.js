const Joi = require("joi");
const createUnitSchema = Joi.object({
    title: Joi.string().empty().min(2).trim().required().messages({
        "string.empty": "Title must not be empty.",
        "any.required": "Title is required.",
        "string.min": "Title should have a minimum length of 2 characters.",
    }),

    unit_number: Joi.number().empty().required().messages({
        "any.required": "unit number is required.",
        "number.base": "unit number must be a number.",
    }),
});

module.exports = createUnitSchema;
