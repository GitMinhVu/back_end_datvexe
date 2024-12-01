"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		/**
     * Add seed commands here.
     *
     * Example:
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      
    */
		await queryInterface.bulkInsert(
			"users",
			[
				{
					name: "minhvu",
					email: "admin@gmail.com",
					avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
					password: "123456",
					numberPhone: "0937750843",
					type: "ADMIN",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Nguyễn Văn A",
					email: "a1234@gmail.com",
					avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
					password: "123456",
					numberPhone: "09823212322",
					type: "ADMIN",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Nguyễn Văn B",
					email: "b1234@gmail.com",
					avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
					password: "123456",
					numberPhone: "09823212322",
					type: "CLIENT",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					name: "Nguyễn Văn C",
					email: "c1234@gmail.com",
					avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OFt6d5Oq-0p2061wKMs8fPEtuweFCMcgTg&usqp=CAU",
					password: "123456",
					numberPhone: "09823212322",
					type: "CLIENT",
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
		await queryInterface.bulkDelete("users", null, {});
	},
};
