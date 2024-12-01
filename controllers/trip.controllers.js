const {Trip, Station, sequelize} = require("../models");

const createTrip = async (req, res) => {
	const {fromStation, toStation, startTime} = req.body;
	try {
		const tripFind = await Trip.findOne({
			where: {
				fromStation,
				toStation,
				startTime,
			},
		});
		if (tripFind) {
			res.status(404).send("Trip đã tồn tại");
		} else {
			const newTrip = await Trip.create({
				fromStation,
				toStation,
				startTime,
			});
			res.status(200).send(newTrip);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};
const getAllTripByUser = async (req, res) => {
	const {fromStation, toStation, startTime} = req.body;
	try {
		const [result] = await sequelize.query(`select trips.*,fromSta.province as fromSta,toSta.province as toSta from trips inner join stations as fromSta on trips.fromStation = fromSta.id inner join stations as toSta on trips.toStation = toSta.id where fromSta.province like "%${fromStation}" and toSta.province like "%${toStation}" and trips.startTime like "${startTime}%"`);
		res.status(200).send(result);
	} catch (error) {
		res.status(500).send(error);
	}
};
const getAllTrip = async (req, res) => {
	try {
		const tripList = await Trip.findAll({
			include: [
				{
					model: Station,
					as: "from",
				},
				{
					model: Station,
					as: "to",
				},
			],
		});

		res.status(200).send(tripList);
	} catch (error) {
		res.status(500).send(error);
	}
};
const getDetailTrip = async (req, res) => {
	const {id} = req.params;

	try {
		const detailTrip = await Trip.findOne({
			where: {
				id,
			},
			include: [
				{
					model: Station,
					as: "from",
				},
				{
					model: Station,
					as: "to",
				},
			],
		});
		res.status(200).send(detailTrip);
	} catch (error) {
		res.status(500).send(error);
	}
};
const deleteTrip = async (req, res) => {
	const {id} = req.params;
	try {
		await Trip.destroy({
			where: {
				id,
			},
		});
		res.status(200).send(`Đã xóa trip có id là: ${id}`);
	} catch (error) {
		res.status(500).send(error);
	}
};
const updateTrip = async (req, res) => {
	const {id} = req.params;
	const {fromStation, toStation, startTime, price} = req.body;
	try {
		await Trip.update(
			{fromStation, toStation, startTime, price},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).send("update trip thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};
module.exports = {
	createTrip,
	getAllTrip,
	getDetailTrip,
	deleteTrip,
	updateTrip,
	getAllTripByUser,
};
