const { Sequelize, DataTypes, Op } = require("sequelize");

const eventEmitter = require("../services/eventEmmiter.service");
let sequelize;

eventEmitter.on("connecting to db", async () => {
	try {
		sequelize = new Sequelize(
			`${process.env.DATABASE}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
			{
				logging: false,

				timestamps: false,
			}
		);

		await sequelize.authenticate();

		console.log("connected to db");

		eventEmitter.emit("connecting to server");
	} catch (error) {
		console.log("failed to connect to db");
		console.log(error);

		setTimeout(() => {
			eventEmitter.emit("connecting to db");
		}, 10000);
	}
});

eventEmitter.emit("connecting to db");

module.exports = { sequelize, DataTypes, Op };
