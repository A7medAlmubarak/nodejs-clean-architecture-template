const { sequelize, DataTypes } = require("./connection");

const Relations = {};
Relations.Course = require("../models/course.model")(sequelize, DataTypes);
Relations.Unit = require("../models/unit.model")(sequelize, DataTypes);
Relations.Enrollment = require("../models/enrollment.model")(
    sequelize,
    DataTypes
);

function setHasMany(modelA, modelB, foreignKey, isNull = false) {
    modelA.hasMany(modelB, {
        foreignKey: foreignKey,
        onDelete: "cascade",
        allowNull: isNull,
    });

    modelB.belongsTo(modelA, {
        foreignKey: foreignKey,
    });
}

function setHasOne(modelA, modelB, foreignKey, isNull = false) {
    modelA.hasOne(modelB, {
        foreignKey: foreignKey,
        onDelete: "cascade",
        allowNull: isNull,
    });

    modelB.belongsTo(modelA, {
        foreignKey: foreignKey,
    });
}

setHasMany(Relations.Course, Relations.Unit, "course_id");
module.exports = Relations;
