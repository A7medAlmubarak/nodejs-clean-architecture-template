const { Model } = require("../database/db");
const { Unit, Course } = Model; // Using alias to avoid conflict

const create = async ({ title, unit_number, course_id }) => {
    const unit = await Unit.create({
        title,
        unit_number,
        course_id,
    });
    if (!unit) {
        throw { statusCode: 500, message: "Failed to create unit" };
    }
    return unit;
};


const show = async (unit_id) => {
    if (!unit_id) throw { statusCode: 400, message: "add unit id" };
    const unit = await Unit.findByPk(unit_id);
    if (!unit) throw { statusCode: 404, message: "not found" };
    return unit;
};

module.exports = {
    create,
    show,
};
