require("dotenv").config();

const jwt = require("jsonwebtoken");

const { Model } = require("../../database/db");

const User = Model.User;

const RError = require("../../utils/error");

const responseMessage = require("../../utils/responseHandler");

const checkUser = async (req, res, next) => {
	try {
		const token = req.headers.authorization;

		await getUser(token);

		next();
	} catch (error) {
		const statusCode = error.statusCode || 500;
		const response = responseMessage(false, statusCode, error.message);

		res.status(statusCode).send(response);
	}
};

const getUser = async (token, secretKey = process.env.ACCESS_SECRET_KEY) => {
	if (!token) {
		throw new RError(401, "unauthorized");
	}

	const decodedToken = jwt.verify(token, secretKey);

	const id = decodedToken.payload;

	const user = await User.findByPk(id, {
		attributes: [
			"user_id",
			"deleted",
			"refresh_token",
			"password",
			"active",
			"first_name",
			"last_name",
		],
	});

	if (user == null) {
		throw new RError(404, "user not found");
	}

	if (!user.active) {
		throw new RError(404, "user is not active");
	}
	if (user.deleted) {
		throw new RError(404, "user is deleted");
	}

	return user;
};

module.exports = { checkUser, getUser };
