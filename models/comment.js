"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({User, PassengerCarCompany}) {
			this.belongsTo(User, {foreignKey: "userId", as: "userComment", onDelete: "cascade"});
			this.belongsTo(PassengerCarCompany, {
				foreignKey: "passengerId",
				as: "passengerComment",
				onDelete: "cascade",
			});
		}
	}
	Comment.init(
		{
			content: DataTypes.STRING,
			userId: DataTypes.INTEGER,
			passengerId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Comment",
		}
	);
	return Comment;
};
