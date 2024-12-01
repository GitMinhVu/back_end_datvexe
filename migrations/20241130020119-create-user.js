"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			avatar: {
				type: Sequelize.STRING,
				defaultValue: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
			},
			password: {
				type: Sequelize.STRING,
			},
			numberPhone: {
				type: Sequelize.STRING,
			},
			type: {
				type: Sequelize.STRING,
				defaultValue: "CLIENT",
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
		await queryInterface.dropTable("Users");
	},
};
