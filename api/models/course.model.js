module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Course",
        {
            course_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            level: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            course_fee: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            about_the_course: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            finished: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            }
        },
        {
            timestamps: false,
        }
    );
};
