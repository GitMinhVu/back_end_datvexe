"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"timepoints",
			[
				//tripassenger = 1
				{
					//1
					time: "08:30:00",
					type: "pickup",
					pointId: 1,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//2
					time: "08:30:00",
					type: "pickup",
					pointId: 2,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//3
					time: "8:00:00",
					type: "pickup",
					pointId: 1,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},

				{
					//4
					time: "14:00:00",
					type: "dropoff",
					pointId: 6,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//5
					time: "14:00:00",
					type: "dropoff",
					pointId: 7,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//6
					time: "14:00:00",
					type: "dropoff",
					pointId: 8,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//trippassenger =2
				{
					//7
					time: "14:00:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//7
					time: "15:00:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//8
					time: "15:00:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//9
					time: "18:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//10
					time: "18:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//11
					time: "18:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//trippassenger 3
				{
					//12
					time: "14:00:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//13
					time: "15:00:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//14
					time: "15:00:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},

				{
					//15
					time: "18:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//16
					time: "18:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//17
					time: "18:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//TRIPPASSENGER = 1
				{
					//18
					time: "8:30:00",
					type: "pickup",
					pointId: 1,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//19
					time: "8:30:00",
					type: "pickup",
					pointId: 2,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//20
					time: "14:00:00",
					type: "dropoff",
					pointId: 6,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//21
					time: "14:00:00",
					type: "dropoff",
					pointId: 7,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//22
					time: "14:00:00",
					type: "dropoff",
					pointId: 8,
					tripPassengerId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//TRIPPASSENGER ID = 3
				{
					//23
					time: "17:30:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//24
					time: "17:30:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//25
					time: "17:30:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},

				{
					//26
					time: "23:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//27
					time: "23:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//28
					time: "23:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//TRIP PASSENGER =4
				{
					//29
					time: "7:30:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//30
					time: "7:30:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//31
					time: "7:15:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},

				{
					//32
					time: "17:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//33
					time: "17:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//34
					time: "17:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//trippassenger = 5
				{
					//35
					time: "8:30:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//36
					time: "8:30:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//37
					time: "8:15:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					//38
					time: "18:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "18:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "18:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//trippassenger = 6
				{
					time: "6:30:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "6:30:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "6:15:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},

				{
					time: "16:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "16:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "16:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//trippassenger = 7
				{
					time: "13:00:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 7,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "13:00:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 7,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "13:00:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 7,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},

				{
					time: "19:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 7,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "19:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 7,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "19:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 7,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//trippassenger = 8
				{
					time: "13:00:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 8,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "13:00:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 8,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "13:00:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 8,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},

				{
					time: "19:00:00",
					type: "dropoff",
					pointId: 9,
					tripPassengerId: 8,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "19:00:00",
					type: "dropoff",
					pointId: 10,
					tripPassengerId: 8,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "19:00:00",
					type: "dropoff",
					pointId: 11,
					tripPassengerId: 8,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				//trippassenger = 9
				{
					time: "13:00:00",
					type: "pickup",
					pointId: 6,
					tripPassengerId: 9,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "13:00:00",
					type: "pickup",
					pointId: 7,
					tripPassengerId: 9,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "13:00:00",
					type: "pickup",
					pointId: 8,
					tripPassengerId: 9,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},

				{
					time: "20:00:00",
					type: "dropoff",
					pointId: 12,
					tripPassengerId: 9,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "20:00:00",
					type: "dropoff",
					pointId: 13,
					tripPassengerId: 9,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					time: "20:00:00",
					type: "dropoff",
					pointId: 14,
					tripPassengerId: 9,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("timepoints", null, {});
	},
};
