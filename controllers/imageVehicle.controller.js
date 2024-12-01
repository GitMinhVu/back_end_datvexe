const {ImageVehicle, Vehicles} = require("../models");

const createImgVehicle = async (req, res) => {
	const {vehicleId} = req.query;
	const {file} = req;
	const protocol = req.protocol;
	const host = req.headers.host;
	const fullUrlImages = `${protocol}://${host}/${file.path}`;
	try {
		const newImg = await ImageVehicle.create({
			link: fullUrlImages,
			vehicleId,
		});
		res.status(200).send(fullUrlImages);
	} catch (error) {
		res.status(500).send(error);
	}
};
const getAllImgVehicle = async (req, res) => {
	const {vehicleId} = req.query;
	try {
		const imgList = await ImageVehicle.findAll({
			where: {
				vehicleId: vehicleId,
			},
			include: [
				{
					model: Vehicles,
					as: "vehicleOfImage",
				},
			],
		});

		res.status(200).send(imgList);
	} catch (error) {
		res.status(500).send(error);
	}
};
const getDetailImgVehicle = async (req, res) => {
	const {id} = req.params;

	try {
		const detailImg = await ImageVehicle.findOne({
			where: {
				id,
			},
		});
		res.status(200).send(detailImg);
	} catch (error) {
		res.status(500).send(error);
	}
};
const deleteImgVehicle = async (req, res) => {
	const {id} = req.params;
	try {
		await ImageVehicle.destroy({
			where: {
				id,
			},
		});
		res.status(200).send(`Đã xóa img có id là: ${id}`);
	} catch (error) {
		res.status(500).send(error);
	}
};
const updateImgVehicle = async (req, res) => {
	const {id} = req.params;
	const {link, vehicleId} = req.body;
	try {
		await ImageVehicle.update(
			{link, vehicleId},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).send("update img thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};
module.exports = {
	createImgVehicle,
	getAllImgVehicle,
	getDetailImgVehicle,
	deleteImgVehicle,
	updateImgVehicle,
};
