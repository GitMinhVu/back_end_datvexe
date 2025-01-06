module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("Tickets", "payment_method", {
			type: Sequelize.STRING,
			allowNull: true,
		});
		await queryInterface.addColumn("Tickets", "payment_status", {
			type: Sequelize.STRING,
			defaultValue: "PENDING",
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("Tickets", "payment_method");
		await queryInterface.removeColumn("Tickets", "payment_status");
	},
};
