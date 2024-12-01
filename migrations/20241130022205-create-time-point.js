"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("TimePoints", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			time: {
				type: Sequelize.TIME,
			},
			type: {
				type: Sequelize.STRING,
			},
			pointId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "points",
					key: "id",
				},
			},
			tripPassengerId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "trippassengers",
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
		await queryInterface.dropTable("TimePoints");
	},
};
