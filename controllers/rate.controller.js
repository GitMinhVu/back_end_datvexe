const {Rate, Comment} = require("../models");

const createRating = async (req, res) => {
	const {numberRate} = req.body;
	try {
		const newRate = await Rate.create({
			numberRate,
		});
		res.status(201).send(newRate);
	} catch (error) {
		res.status(500).send(error);
	}
};
const getAllRate = async (req, res) => {
	try {
		const RateList = await Rate.findAll({
			include: [
				{
					model: Comment,
					as: "rateComment",
				},
			],
		});

		res.status(200).send(RateList);
	} catch (error) {
		res.status(500).send(error);
	}
};
module.exports = {
	createRating,
	getAllRate,
};
