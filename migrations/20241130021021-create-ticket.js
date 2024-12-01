"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Tickets", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			note: {
				type: Sequelize.STRING,
			},
			status: {
				type: Sequelize.STRING,
				defaultValue: "pending",
			},
			totalAmount: {
				type: Sequelize.FLOAT,
			},
			user_id: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "users",
					key: "id",
				},
			},
			tripPassengerId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "tripPassengers",
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
		await queryInterface.dropTable("Tickets");
	},
};
