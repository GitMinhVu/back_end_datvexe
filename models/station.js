"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Station extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({Trip, Point}) {
			this.hasMany(Trip, {foreignKey: "fromStation", as: "from", onDelete: "cascade"});
			this.hasMany(Trip, {foreignKey: "toStation", as: "to", onDelete: "cascade"});
			this.hasMany(Point, {foreignKey: "stationId", as: "stationPoint", onDelete: "cascade"});
		}
	}
	Station.init(
		{
			name: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true,
					len: [3, 30],
				},
			},
			address: {
				type: DataTypes.STRING,
				validate: {
					checkLen(value) {
						if (value.length > 5 && value.length <= 50) {
							return true;
						} else {
							throw new Error("Độ dài phải lớn hơn 5 và nhỏ hơn 50");
						}
					},
				},
			},
			province: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Station",
		}
	);
	return Station;
};
