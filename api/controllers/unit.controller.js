const unit_services = require("../services/unit.services");
const UnitResource = require("../resource/UnitResource");

const create = async (req, res) => {
    try {
        const course_id = req.course_id;
        const { title, unit_number } = req.body;
        const unit = await unit_services.create({
            title,
            unit_number,
            course_id,
        });
        if (unit) {
            return res.status(201).json({
                success: true,
                message: "unit created successfully",
                data: await new UnitResource(unit),
            });
        } else {
            throw { statusCode: 404, message: "Failed to create unit" };
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


const show = async (req, res) => {
    try {
        const unit = await unit_services.show(req.params.id);
        if (unit) {
            return res.status(200).json({
                success: true,
                message: "unit returned successfully",
                data: await new UnitResource(unit),
            });
        } else {
            throw { statusCode: 404, message: "Failed to get unit" };
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


module.exports = {
    create,
    show,
};
