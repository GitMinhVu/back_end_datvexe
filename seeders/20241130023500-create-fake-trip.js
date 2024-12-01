"use strict";

const {DATE} = require("sequelize");
var today = new Date();
var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			"trips",
			[
				{
					fromStation: 1,
					toStation: 3,
					startTime: dateTime,

					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					fromStation: 3,
					toStation: 4,
					startTime: dateTime,

					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					fromStation: 3,
					toStation: 5,
					startTime: dateTime,

					createdAt: dateTime,
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					fromStation: 5,
					toStation: 3,
					startTime: dateTime,

					createdAt: "2024-12-01 07:57:23",
					updatedAt: "2024-12-01 07:57:23",
				},
				{
					fromStation: 1,
					toStation: 8,
					startTime: dateTime,
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
		await queryInterface.bulkDelete("trips", null, {});
	},
};
