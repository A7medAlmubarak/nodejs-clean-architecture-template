const course_services = require("../services/course.services");
const CourseResource = require("../resource/CourseResource");

const create = async (req, res) => {
    try {
        const { title, level, course_fee, about_the_course, teacher_id } =
            req.body;
        const course = await course_services.create({
            title,
            level,
            course_fee,
            about_the_course,
            teacher_id,
        });
        if (course) {
            return res.status(201).json({
                success: true,
                message: "Course created successfully",
                data: await new CourseResource(course),
            });
        } else {
            throw { statusCode: 404, message: "Failed to create course" };
        }
    } catch (error) {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Internal server error";
        console.error(error);
        return res.status(statusCode).json({
            success: false,
            message: message,
        });
    }
};

const remove = async (req, res) => {
    try {
        const course_id = req.params.id;
        await course_services.remove(course_id);
        return res.status(202).json({
            success: true,
            message: "Course removed successfully",
        });
    } catch (error) {
        const statusCode = error.statusCode || 500;
        const message = error.message || "Internal server error";
        console.error(error);
        return res.status(statusCode).json({
            success: false,
            message: message,
        });
    }
};

module.exports = {
    create,
    remove,
};
