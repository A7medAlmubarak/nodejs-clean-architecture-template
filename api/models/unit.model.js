module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"Unit",
		{
			unit_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},

			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},

			unit_number: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
