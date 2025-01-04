"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
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
					dateOfBirth: "1990-01-01",
					address: "123 Main Street, City",
					gender: "Male",
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
					dateOfBirth: "1992-05-15",
					address: "456 Park Avenue, City",
					gender: "Male",
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
					dateOfBirth: "1995-08-20",
					address: "789 Lake Road, City",
					gender: "Female",
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
					dateOfBirth: "1988-12-25",
					address: "321 River Street, City",
					gender: "Male",
					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("users", null, {});
	},
};
