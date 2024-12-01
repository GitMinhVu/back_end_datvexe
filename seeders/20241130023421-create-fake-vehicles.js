"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"vehicles",
			[
				{
					name: "Xe limouse Đức Việt",
					description: "Xe có 21 chỗ, Có WC , Wifi",
					type: "limouse",
					passengerCarId: 1,
					numberFloors: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe Phương Trang",
					description: "Xe bình dân tiện nghi",
					type: "normal",
					passengerCarId: 2,
					numberFloors: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe limouse Sapa",
					description: "Xe có 15 chỗ, Có WC , Wifi",
					type: "limouse",
					numberFloors: 2,
					passengerCarId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe Khách Quỳnh Như",
					description: "Xe có 21 chỗ, Có WC , Wifi",
					type: "normal",
					numberFloors: 2,
					passengerCarId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe Phú Huỳnh",
					description: "Xe có 21 chỗ, Có WC , Wifi",
					type: "normal",
					numberFloors: 2,
					passengerCarId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe limouse Đức Việt",
					description: "Xe có 21 chỗ, Có WC , Wifi",
					type: "limouse",
					numberFloors: 2,
					passengerCarId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe limouse Đức Phú",
					description: "Xe có 21 chỗ, Có WC , Wifi",
					type: "limouse",
					numberFloors: 2,
					passengerCarId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe limouse Trần Trang",
					description: "Xe có 21 chỗ, Có WC , Wifi",
					type: "limouse",
					numberFloors: 2,
					passengerCarId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe Hải Triều",
					description: "Xe có 8 chỗ, Có WC , Wifi",
					type: "normal",
					numberFloors: 1,
					passengerCarId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe Khách Quảng Trị",
					description: "Xe có 21 chỗ, Có WC , Wifi",
					type: "normal",
					numberFloors: 1,
					passengerCarId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Xe Đà Nẵng",
					description: "Xe có 21 chỗ, Có WC , Wifi",
					type: "normal",
					numberFloors: 1,
					passengerCarId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("vehicles", null, {});
	},
};
