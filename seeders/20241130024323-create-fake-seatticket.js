"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"seattickets",
			[
				//ticket1
				{
					ticketId: 1,
					seatId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					ticketId: 1,
					seatId: 10,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//ticket2
				{
					ticketId: 2,
					seatId: 35,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					ticketId: 2,
					seatId: 40,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//ticket3
				{
					ticketId: 3,
					seatId: 31,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					ticketId: 3,
					seatId: 32,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//ticket4
				{
					ticketId: 4,
					seatId: 15,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					ticketId: 4,
					seatId: 20,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("seattickets", null, {});
	},
};
