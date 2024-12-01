"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"trippassengers",
			[
				{
					//ID=1
					tripId: 1,
					passengerId: 2,
					startTime: "08:30:00",
					endTime: "14:00:00",
					vehicleId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//ID=2
					tripId: 2,
					passengerId: 3,
					startTime: "14:30:00",
					endTime: "18:00:00",
					vehicleId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//ID=3
					tripId: 2,
					passengerId: 4,
					startTime: "17:30:00",
					endTime: "23:00:00",
					vehicleId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//ID=4
					tripId: 2,
					passengerId: 1,
					startTime: "7:30:00",
					endTime: "17:00:00",
					vehicleId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//ID=5
					tripId: 2,
					passengerId: 2,
					startTime: "8:30:00",
					endTime: "18:00:00",
					vehicleId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//id=6
					tripId: 2,
					passengerId: 5,
					startTime: "6:30:00",
					endTime: "16:00:00",
					vehicleId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//id=7
					tripId: 2,
					passengerId: 5,
					startTime: "13:00:00",
					endTime: "19:00:00",
					vehicleId: 9,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//id=8
					tripId: 2,
					passengerId: 5,
					startTime: "13:00:00",
					endTime: "19:00:00",
					vehicleId: 9,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//id=9
					tripId: 3,
					passengerId: 2,
					startTime: "13:30:00",
					endTime: "20:00:00",
					vehicleId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//id=10
					tripId: 3,
					passengerId: 3,
					startTime: "7:45:00",
					endTime: "16:45:00",
					vehicleId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//id=11
					tripId: 4,
					passengerId: 4,
					startTime: "6:30:00",
					endTime: "15:00:00",
					vehicleId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//id=12
					tripId: 5,
					passengerId: 2,
					startTime: "08:30:00",
					endTime: "14:00:00",
					vehicleId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("trippassengers", null, {});
	},
};
