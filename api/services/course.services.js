const { Model } = require("../database/db");
const { Course } = Model;

const create = async ({
    title,
    level,
    course_fee,
    about_the_course,
    teacher_id,
}) => {
    const course = await Course.create({
        title,
        level,
        course_fee,
        about_the_course,
        teacher_id,
    });
    if (!course) {
        throw { statusCode: 500, message: "Failed to create course" };
    }
    return course;
};

const remove = async (course_id) => {
    const course = await Course.findByPk(course_id);
    if (!course) {
        throw { statusCode: 404, message: "Course not found" };
    }
    await course.destroy();
    return true;
};
module.exports = {
    create,
    remove,
};
