const {Ticket, User, TripPassenger, Trip, PassengerCarCompany, Vehicles, Seats, PointTicket, SeatTicket, Point, ImageVehicle, Station, TimePoint} = require("../models");

const getTimePointByTrip = async (req, res) => {
	const {tripPassengerId} = req.query;
	try {
		if (tripPassengerId) {
			const listTimePoint = await TimePoint.findAll({
				where: {
					tripPassengerId,
				},
				include: [
					{
						model: Point,
						as: "point",
						include: [
							{
								model: Station,
								as: "stationPoint",
							},
						],
					},
				],
			});
			res.status(200).send(listTimePoint);
		} else {
			const listTimePoint = await TimePoint.findAll({
				include: [
					{
						model: Point,
						as: "point",
						include: [
							{
								model: Station,
								as: "stationPoint",
							},
						],
					},
				],
			});
			res.status(200).send(listTimePoint);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const CreateTimePointByTrip = async (req, res) => {
	const {tripPassengerId, arrListPoint} = req.body;
	try {
		arrListPoint.forEach(async (element) => {
			// const timePointFindPickUp = await TimePoint.findOne({
			// 	where: {
			// 		type: "pickup",
			// 		time: element.timePickUp,
			// 		pointId: element.PickupPointId,
			// 		tripPassengerId,
			// 	},
			// });
			// const timePointFindDropOff = await TimePoint.findOne({
			// 	where: {
			// 		type: "dropoff",
			// 		time: element.timeDropOff,
			// 		pointId: element.DropoffPointId,
			// 		tripPassengerId,
			// 	},
			// });
			// if (timePointFindDropOff || timePointFindPickUp) {
			// 	res.status(404).send("Điểm đã được tạo");
			// } else {
			let newPointPickUp = await TimePoint.create({
				time: element.timePickUp,
				type: "pickup",
				pointId: element.PickupPointId,
				tripPassengerId,
			});
			let newPointDropOff = await TimePoint.create({
				time: element.timeDropOff,
				type: "dropoff",
				pointId: element.DropoffPointId,
				tripPassengerId,
			});

			// }
		});
		res.status(200).send("tạo thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};

const GetTimePointDetail = async (req, res) => {
	const {id} = req.params;

	try {
		const detailTimePoint = await TimePoint.findOne({
			where: {
				id,
			},
			include: [
				{
					model: Point,
					as: "point",
					include: [
						{
							model: Station,
							as: "stationPoint",
						},
					],
				},
			],
		});
		res.status(200).send(detailTimePoint);
	} catch (error) {
		res.status(500).send(error);
	}
};

module.exports = {
	getTimePointByTrip,
	CreateTimePointByTrip,
	GetTimePointDetail,
};
