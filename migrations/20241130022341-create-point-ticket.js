"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("PointTickets", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			typePoint: {
				type: Sequelize.STRING,
			},
			timepointId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "timepoints",
					key: "id",
				},
			},
			ticketId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "tickets",
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
		await queryInterface.dropTable("PointTickets");
	},
};
