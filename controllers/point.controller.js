const {Station, Point} = require("../models");

const getAllPointByStationId = async (req, res) => {
	const {stationId} = req.query;
	try {
		if (stationId) {
			const PointList = await Point.findAll({
				where: {
					stationId,
				},
			});
			res.status(200).send(PointList);
		} else {
			const PointList = await Point.findAll();
			res.status(200).send(PointList);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};
const getDetailPoint = async (req, res) => {
	const {id} = req.params;
	try {
		const detailPoint = await Point.findOne({
			where: {
				id,
			},
		});
		res.status(200).send(detailPoint);
	} catch (error) {
		res.status(500).send(error);
	}
};

const createPoint = async (req, res) => {
	const {name, address, stationId} = req.body;
	try {
		const newPoint = await Point.create({name, address, stationId});
		res.status(200).send(newPoint);
	} catch (error) {
		res.status(500).send(error);
	}
};

const updatePoint = async (req, res) => {
	const {id} = req.params;
	const {name, address, stationId} = req.body;
	try {
		const detailPoint = await Point.findOne({
			where: {
				id,
			},
		});
		detailPoint.name = name;
		detailPoint.address = address;
		detailPoint.stationId = stationId;
		await detailPoint.save();
		res.status(200).send(detailPoint);
	} catch (error) {
		res.status(500).send(error);
	}
};

const deletePoint = async (req, res) => {
	const {id} = req.params;
	try {
		await Point.destroy({
			where: {
				id,
			},
		});
		res.status(200).send("delete success");
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	getAllPointByStationId,
	getDetailPoint,
	updatePoint,
	deletePoint,
	createPoint,
};
