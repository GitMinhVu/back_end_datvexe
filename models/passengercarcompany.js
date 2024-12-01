"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class PassengerCarCompany extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({TripPassenger, Vehicles, Comment, Rate}) {
			this.hasMany(TripPassenger, {
				foreignKey: "passengerId",
				as: "passenger",
				onDelete: "cascade",
			});
			this.hasMany(Vehicles, {
				foreignKey: "passengerCarId",
				as: "passengerCar",
				onDelete: "cascade",
			});
			this.hasMany(Comment, {
				foreignKey: "passengerId",
				as: "passengerComment",
				onDelete: "cascade",
			});
			this.hasMany(Rate, {foreignKey: "passengerId", as: "passengerRate", onDelete: "cascade"});
		}
	}
	PassengerCarCompany.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			imageIntro: DataTypes.STRING,
			confirmType: DataTypes.STRING,
			price: DataTypes.FLOAT,
		},
		{
			sequelize,
			modelName: "PassengerCarCompany",
		}
	);
	return PassengerCarCompany;
};
