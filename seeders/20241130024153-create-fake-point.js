"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"points",
			[
				{
					name: "Văn Phòng Đà Nẵng",
					address: "75 Thanh Tịnh, Phường Hòa Minh, Liên Chiểu, Đà Nẵng",
					stationId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng chính",
					address: "201 Tôn Đức Thắng, Phường Hòa Minh, Liên Chiểu, Đà Nẵng",
					stationId: 1,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng phụ",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng 3 Bến Xe Miền Đông",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng 2 Bến Xe Miền Đông",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 2,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Dãy 8 quầy D1- Bến xe miền đông",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Văn Phòng Sài Gòn",
					address: "71 Chế Lan Viên",
					stationId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Chợ Đầu Mối Thủ Đức",
					address: "Quận thử đức",
					stationId: 3,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Huế (Dọc Quốc Lộ 1A)",
					address: "Quốc lộ 1A",
					stationId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Văn Phòng Huế",
					address: "46 Nguyễn Hữu Thọ",
					stationId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Bến xe phía Nam",
					address: "97 An Dương Vương",
					stationId: 4,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng Chính",
					address: "46 Nguyễn Hữu Đa",
					stationId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng Phụ",
					address: "46 Nguyễn Hữu Đa",
					stationId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Đường Quốc Lộ",
					address: "99 Nguyễn Hữu Cảnh",
					stationId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Chợ Lớn",
					address: "50 Nguyễn Nhạc",
					stationId: 5,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng Phụ",
					address: "500.Phạm Ngũ Lão",
					stationId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng Chính Bến Xe",
					address: "500.Phạm Ngũ Lão",
					stationId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Chợ Long Xuyên",
					address: "50 Nguyễn Nhạc",
					stationId: 6,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng Chính",
					address: "Tp.Cần Thơ",
					stationId: 7,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng Phụ Bến Xe Cần Thơ",
					address: "Tp.Cần Thơ",
					stationId: 7,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Chợ Cần Thơ",
					address: "50 Nguyễn Trí",
					stationId: 7,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Ngã Ba Tây Ninh",
					address: "Đường Quốc Lộ 1A",
					stationId: 8,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Cổng Chính Bến Xe Tây Ninh",
					address: "69.Phạm Bá Khá",
					stationId: 8,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Chợ Tây Ninh",
					address: "79 Nguyễn Tuân",
					stationId: 8,
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("points", null, {});
	},
};
