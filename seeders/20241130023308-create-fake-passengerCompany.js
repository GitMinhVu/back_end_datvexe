"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"passengercarcompanies",
			[
				{
					name: "Sao mai",
					description: "Limousine giường phòng 21 chỗ tài trợ",
					imageIntro: "https://static.vexere.com/production/images/1601697902998.jpeg?w=250&h=250",
					confirmType: "Xác nhận tức thì",
					price: "350000",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Sao Việt",
					description: "Limousine giường phòng 21 chỗ",
					imageIntro: "https://static.vexere.com/production/images/1601697902998.jpeg?w=250&h=250",
					confirmType: "Xác nhận tức thì",
					price: "400000",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Sapa Group Bus",
					description: "Limousine giường phòng 21 chỗ",
					imageIntro: "https://static.vexere.com/production/images/1610522448264.jpeg?w=250&h=250",
					confirmType: "Xác nhận tức thì",
					price: "400000",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Toàn Thắng",
					description: "Limousine giường phòng 10 chỗ",
					imageIntro: "https://static.vexere.com/production/images/1576836788562.jpeg?w=250&h=250",
					confirmType: "Xác nhận tức thì",
					price: "400000",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Phú Huỳnh",
					description: "Limousine giường phòng 18 chỗ",
					imageIntro: "https://static.vexere.com/production/images/1590571040223.jpeg?w=250&h=250",
					confirmType: "Xác nhận tức thì",
					price: "800000",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("passengercarcompanies", null, {});
	},
};
