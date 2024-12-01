"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		/**
     * Add seed commands here.
     *
      Example:
      
    */
		await queryInterface.bulkInsert(
			"stations",
			[
				{
					name: "Bến xe Đà Nẵng",
					address: " Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng 550000",
					province: "Đà Nẵng",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Bến Xe Miền Đông",
					address: "Phường 26, Bình Thạnh, Ho Chi Minh City",
					province: "Hồ Chí Minh",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Bến Xe Miền Tây",
					address: "395 Kinh Dương Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh 700000",
					province: "Hồ Chí Minh",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Bến Xe Miền Bắc",
					address: "132 Lý Thái Tổ, An Hòa, Thành phố Huế, Thừa Thiên Huế",
					province: "Huế",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Bến xe Long Xuyên 2",
					address: " 392.Phạm Cự Lượng",
					province: "An Giang",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Bến xe Long Xuyên 3",
					address: " 500.Phạm Ngũ Lão",
					province: "An Giang",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Bến xe Cần Thơ",
					address: "Trung tâm thành phố",
					province: "Cần Thơ",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Bến xe miền tây",
					address: "500 Nguyễn Sinh Sắc",
					province: "Tây Ninh",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("stations", null, {});
	},
};
