const {Comment, User, PassengerCarCompany, Rate} = require("../models");

const createComment = async (req, res) => {
	const {content, userId, passengerId, numberRate} = req.body;
	try {
		// Create rate first
		const rate = await Rate.create({
			numberRate,
			userId,
			passengerId,
		});

		// Create comment with rate reference
		const newComment = await Comment.create({
			content,
			userId,
			passengerId,
			rateId: rate.id,
		});

		res.status(201).send(newComment);
	} catch (error) {
		res.status(500).send(error);
	}
};

// findALL: trả ra tất cả các phần tử object và ném vào mảng
const getAllComment = async (req, res) => {
	const {passengerId} = req.query;
	try {
		if (passengerId) {
			const commentList = await Comment.findAll({
				where: {
					passengerId,
				},
				include: [
					{
						model: User,
						as: "userComment",
						include: {
							model: Rate,
							as: "userRate",
						},
					},
					{
						model: PassengerCarCompany,
						as: "passengerComment",
					},
				],
			});

			res.status(200).send(commentList);
		} else {
			const commentList = await Comment.findAll({
				include: [
					{
						model: User,
						as: "userComment",
					},
					{
						model: PassengerCarCompany,
						as: "passengerComment",
					},
				],
			});
			res.status(200).send(commentList);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllCommentUser = async (req, res) => {
	const {id} = req.params;
	const {passengerId} = req.query;
	try {
		if (passengerId) {
			const commentList = await Comment.findAll({
				where: {
					passengerId,
					userId: id,
				},
				include: [
					{
						model: User,
						as: "userComment",
						include: {
							model: Rate,
							as: "userRate",
						},
					},
					{
						model: PassengerCarCompany,
						as: "passengerComment",
					},
				],
			});

			res.status(200).send(commentList);
		} else {
			const commentList = await Comment.findAll({
				include: [
					{
						model: User,
						as: "userComment",
					},
					{
						model: PassengerCarCompany,
						as: "passengerComment",
					},
				],
			});
			res.status(200).send(commentList);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const getDetailComment = async (req, res) => {
	const {id} = req.params;

	try {
		const detailComment = await Comment.findOne({
			where: {
				id,
			},
		});
		res.status(200).send(detailComment);
	} catch (error) {
		res.status(500).send(error);
	}
};
const deleteComment = async (req, res) => {
	const {id} = req.params;
	try {
		await Comment.destroy({
			where: {
				id,
			},
		});
		res.status(200).send(`Đã xóa img có id là: ${id}`);
	} catch (error) {
		res.status(500).send(error);
	}
};
const updateComment = async (req, res) => {
	const {id} = req.params;
	const {content, userId, passengerId} = req.body;
	try {
		await Comment.update(
			//ts1: các phần tử muốn update
			{content, userId, passengerId},
			//điều kiện để tìm kiếm

			{
				where: {
					id,
				},
			}
		);
		res.status(200).send("update comment thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};
module.exports = {
	createComment,
	getAllComment,
	getDetailComment,
	deleteComment,
	updateComment,
	getAllCommentUser,
};
