require("dotenv").config();

const jwt = require("jsonwebtoken");

const { Model } = require("../../database/db");

const Admin = Model.Admin;
const responseMessage = require("../../utils/responseHandler.js");

const RError = require("../../utils/error.js");

const checkAdmin = async (req, res, next) => {
	try {
		const token = req.headers.authorization;
		if (!token) {
			throw new RError(401, "unauthorized");
		}

		const decodedToken = jwt.verify(
			token,
			process.env.ADMIN_ACCESS_SECRET_KEY
		);

		const id = decodedToken.payload;

		const admin = await Admin.findByPk(id, {
			attributes: ["admin_id", "is_super"],
		});

		if (admin == null) {
			throw new RError(404, "admin not found");
		}

		req.isSuper = admin.is_super;

		next();
	} catch (error) {
		const statusCode = error.statusCode || 500;
		const response = responseMessage(false, statusCode, error.message);
		return res.status(statusCode).json(response);
	}
};

module.exports = { checkAdmin };
