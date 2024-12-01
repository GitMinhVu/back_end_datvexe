"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"pointtickets",
			[
				//ticket 1
				{
					typePoint: "pickup",
					timepointId: 1,
					ticketId: 1,
					createdAt: "2024-12-10 07:57:23",
					updatedAt: "2024-12-10 07:57:23",
				},
				{
					typePoint: "dropoff",
					timepointId: 4,
					ticketId: 1,
					createdAt: "2024-12-10 07:57:23",
					updatedAt: "2024-12-10 07:57:23",
				},
				//ticket 2
				{
					typePoint: "pickup",
					timepointId: 7,
					ticketId: 2,
					createdAt: "2024-12-10 07:57:23",
					updatedAt: "2024-12-10 07:57:23",
				},
				{
					typePoint: "dropoff",
					timepointId: 9,
					ticketId: 2,
					createdAt: "2024-12-10 07:57:23",
					updatedAt: "2024-12-10 07:57:23",
				},
				//ticket 3
				{
					typePoint: "pickup",
					timepointId: 7,
					ticketId: 3,
					createdAt: "2024-12-10 07:57:23",
					updatedAt: "2024-12-10 07:57:23",
				},
				{
					typePoint: "dropoff",
					timepointId: 9,
					ticketId: 3,
					createdAt: "2024-12-10 07:57:23",
					updatedAt: "2024-12-10 07:57:23",
				},
				//ticket 4
				{
					typePoint: "pickup",
					timepointId: 36,
					ticketId: 4,
					createdAt: "2024-12-10 07:57:23",
					updatedAt: "2024-12-10 07:57:23",
				},
				{
					typePoint: "dropoff",
					timepointId: 38,
					ticketId: 4,
					createdAt: "2024-12-10 07:57:23",
					updatedAt: "2024-12-10 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("pointtickets", null, {});
	},
};
