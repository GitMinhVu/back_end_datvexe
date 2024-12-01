const {Seats, Vehicles} = require("../models");

const createSeat = async (req, res) => {
	const {vehicleId} = req.query;
	console.log("listSeat", req.body);
	try {
		req.body.forEach(async (seat) => {
			const newSeats = await Seats.create({
				name: seat.name,
				floor: seat.floor,
				price: seat.price,
				type: seat.type,
				vehicleId,
			});
		});

		res.status(200).send("Thêm ghế thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};
const getAllSeats = async (req, res) => {
	const {vehicleId} = req.query;
	try {
		if (vehicleId) {
			const seatList = await Seats.findAll({
				where: {
					vehicleId,
				},
				// include: [
				// 	{
				// 		model: Vehicles,
				// 		as: "vehicle",
				// 	},
				// ],
			});
			res.status(200).send(seatList);
		} else {
			const seatList = await Seats.findAll({
				// include: [
				// 	{
				// 		model: Vehicles,
				// 		as: "vehicle",
				// 	},
				// ],
			});
			res.status(200).send(seatList);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};
const getDetailSeat = async (req, res) => {
	const {id} = req.params;

	try {
		const detailSeat = await Seats.findOne({
			where: {
				id,
			},
		});
		res.status(200).send(detailSeat);
	} catch (error) {
		res.status(500).send(error);
	}
};
const deleteSeats = async (req, res) => {
	const {id} = req.params;
	try {
		await Seats.destroy({
			where: {
				id,
			},
		});
		res.status(200).send(`Đã xóa vehicles có id là: ${id}`);
	} catch (error) {
		res.status(500).send(error);
	}
};
const updateSeats = async (req, res) => {
	const {id} = req.params;
	const {name, status, floor, price} = req.body;
	try {
		await Seats.update(
			{name, status, floor, price},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).send("update seats thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};
module.exports = {
	createSeat,
	getAllSeats,
	getDetailSeat,
	deleteSeats,
	updateSeats,
};
