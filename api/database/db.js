const { sequelize, Op } = require("./connection");

const Relations = require("./relations");
const connection = {};
connection.sequelize = sequelize;

const Model = Relations;
module.exports = { connection, Model, Op };
