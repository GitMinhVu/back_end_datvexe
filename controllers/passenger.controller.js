const {PassengerCarCompany, Vehicles, ImageVehicle, Rate, TripPassenger, Ticket} = require("../models");

const createPassenger = async (req, res) => {
	const {name, description, confirmType, price} = req.body;
	try {
		const newPassengerCar = await PassengerCarCompany.create({
			name,
			description,
			confirmType,
			price,
		});
		res.status(200).send(newPassengerCar);
	} catch (error) {
		res.status(500).send(error);
	}
};
const getAllPassenger = async (req, res) => {
	try {
		const passengerList = await PassengerCarCompany.findAll({
			include: [
				{
					model: Vehicles,
					as: "passengerCar",
					include: [
						{
							model: ImageVehicle,
							as: "vehicleOfImage",
						},
					],
				},
				{
					model: Rate,
					as: "passengerRate",
				},
				{
					model: TripPassenger,
					as: "passenger",
					include: [
						{
							model: Ticket,
							as: "tripPassengerTicket",
						},
					],
				},
			],
		});

		res.status(200).send(passengerList);
	} catch (error) {
		res.status(500).send(error);
	}
};
const getDetailPassenger = async (req, res) => {
	const {id} = req.params;

	try {
		const detailPassenger = await PassengerCarCompany.findOne({
			where: {
				id,
			},
			include: [
				{
					model: Vehicles,
					as: "passengerCar",
					include: [
						{
							model: ImageVehicle,
							as: "vehicleOfImage",
						},
					],
				},
				{
					model: TripPassenger,
					as: "passenger",
					include: [
						{
							model: Ticket,
							as: "tripPassengerTicket",
						},
					],
				},

				{
					model: Rate,
					as: "passengerRate",
				},
			],
		});
		res.status(200).send(detailPassenger);
	} catch (error) {
		res.status(500).send(error);
	}
};
const deletePassenger = async (req, res) => {
	const {id} = req.params;
	try {
		await PassengerCarCompany.destroy({
			where: {
				id,
			},
		});
		res.status(200).send(`Đã xóa Passenger có id là: ${id}`);
	} catch (error) {
		res.status(500).send(error);
	}
};
const updatePassenger = async (req, res) => {
	const {id} = req.params;
	const {name, description, confirmType, price} = req.body;

	try {
		await PassengerCarCompany.update(
			{name, description, confirmType, price},
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

const updateImagePassenger = async (req, res) => {
	const {id} = req.params;
	const {file} = req;
	const protocol = req.protocol;
	const host = req.headers.host;
	const fullUrlImages = `${protocol}://${host}/${file.path}`;
	try {
		await PassengerCarCompany.update(
			{imageIntro: fullUrlImages},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).send(fullUrlImages);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	createPassenger,
	getAllPassenger,
	getDetailPassenger,
	updatePassenger,
	deletePassenger,
	updateImagePassenger,
};
