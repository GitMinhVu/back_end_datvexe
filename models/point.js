"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Point extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({Station, PointTicket, TimePoint}) {
			this.belongsTo(Station, {foreignKey: "stationId", as: "stationPoint", onDelete: "cascade"});
			this.hasMany(TimePoint, {foreignKey: "pointId", as: "point", onDelete: "cascade"});
		}
	}
	Point.init(
		{
			name: DataTypes.STRING,
			address: DataTypes.STRING,
			stationId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Point",
		}
	);
	return Point;
};
