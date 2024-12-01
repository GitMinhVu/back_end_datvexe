const {Vehicles, PassengerCarCompany, Seats, ImageVehicle} = require("../models");

const createVehicles = async (req, res) => {
	const {name, description, type, numberFloors, passengerCarId} = req.body;
	try {
		const newVehicles = await Vehicles.create({
			name,
			description,
			type,
			numberFloors,
			passengerCarId,
		});
		res.status(201).send(newVehicles);
	} catch (error) {
		res.status(500).send(error);
	}
};
const getAllVehicles = async (req, res) => {
	try {
		const vehiclesList = await Vehicles.findAll({
			include: [
				{
					model: PassengerCarCompany,
					as: "passengerCar",
				},
				{
					model: Seats,
					as: "seatVehicle",
				},
				{
					model: ImageVehicle,
					as: "vehicleOfImage",
				},
			],
		});

		res.status(200).send(vehiclesList);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllVehiclesByPassenger = async (req, res) => {
	const {passengerCarId} = req.query;
	try {
		const vehiclesList = await Vehicles.findAll({
			where: {
				passengerCarId,
			},
		});

		res.status(200).send(vehiclesList);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getDetailVehicles = async (req, res) => {
	const {id} = req.params;

	try {
		const detailVehicles = await Vehicles.findOne({
			where: {
				id,
			},
			include: [
				{
					model: PassengerCarCompany,
					as: "passengerCar",
				},
				{
					model: Seats,
					as: "seatVehicle",
				},
				{
					model: ImageVehicle,
					as: "vehicleOfImage",
				},
			],
		});
		res.status(200).send(detailVehicles);
	} catch (error) {
		res.status(500).send(error);
	}
};
const deleteVehicles = async (req, res) => {
	const {id} = req.params;
	try {
		await Vehicles.destroy({
			where: {
				id,
			},
		});
		res.status(200).send(`Đã xóa vehicles có id là: ${id}`);
	} catch (error) {
		res.status(500).send(error);
	}
};
const updateVehicles = async (req, res) => {
	const {id} = req.params;
	const {name, description, type, numberFloors} = req.body;
	try {
		await Vehicles.update(
			{name, description, type, numberFloors},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).send("update vehicles thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};
module.exports = {
	createVehicles,
	getAllVehicles,
	getDetailVehicles,
	deleteVehicles,
	updateVehicles,
	getAllVehiclesByPassenger,
};
