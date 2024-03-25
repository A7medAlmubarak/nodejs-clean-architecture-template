const Joi = require("joi");
const updateUnitSchema = Joi.object({
    title: Joi.string().empty().min(2).trim().messages({
        "string.empty": "Title must not be empty.",
        "any.required": "Title is required.",
        "string.min": "Title should have a minimum length of 2 characters.",
    }),

    unit_number: Joi.number().empty().messages({
        "any.required": "unit number is required.",
        "number.base": "unit number must be a number.",
    }),
});

module.exports = updateUnitSchema;
