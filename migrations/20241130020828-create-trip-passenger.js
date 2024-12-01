"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("TripPassengers", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			tripId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "trips",
					key: "id",
				},
			},
			passengerId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "passengercarcompanies",
					key: "id",
				},
			},
			startTime: {
				type: Sequelize.TIME,
			},
			endTime: {
				type: Sequelize.TIME,
			},
			status: {
				type: Sequelize.STRING,
				defaultValue: "depart",
			},
			vehicleId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "vehicles",
					key: "id",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("TripPassengers");
	},
};
