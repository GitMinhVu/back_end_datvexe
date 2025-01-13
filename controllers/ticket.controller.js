const {Ticket, User, TripPassenger, Trip, PassengerCarCompany, Vehicles, Seats, PointTicket, SeatTicket, Point, ImageVehicle, Station, TimePoint} = require("../models");
const createTicket = async (req, res) => {
	const {user_id, tripPassengerId} = req.body;
	try {
		const newTicket = await Ticket.create({
			user_id,
			tripPassengerId,
		});
		res.status(201).send(newTicket);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllTicket = async (req, res) => {
	const {userId} = req.query;
	try {
		if (userId) {
			const listTicket = await Ticket.findAll({
				where: {
					user_id: userId,
				},
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
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
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		} else {
			const listTicket = await Ticket.findAll({
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
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
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllTicketId = async (req, res) => {
	const {id} = req.query;
	try {
		if (id) {
			const listTicket = await Ticket.findAll({
				where: {
					id,
				},
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
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
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		} else {
			const listTicket = await Ticket.findAll({
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
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
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllTicketTrip = async (req, res) => {
	const {tripPassengerId} = req.query;
	try {
		if (tripPassengerId) {
			const listTicket = await Ticket.findAll({
				where: {
					tripPassengerId: tripPassengerId,
				},
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
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
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const getDetailTicket = async (req, res) => {
	const {id} = req.params;

	try {
		const detailTicket = await Ticket.findOne({
			where: {
				id,
			},
			include: [
				{
					model: User,
					as: "user",
				},
				{
					model: TripPassenger,
					as: "tripPassengerTicket",
					include: [
						{
							model: PassengerCarCompany,
							as: "passenger",
						},
						{
							model: Trip,
							as: "trip",
							include: [
								{
									model: Station,
									as: "from",
									include: {
										model: Point,
										as: "stationPoint",
									},
								},
								{
									model: Station,
									as: "to",
									include: {
										model: Point,
										as: "stationPoint",
									},
								},
							],
						},
						{
							model: Vehicles,
							as: "vehicle",
							include: [
								{
									model: ImageVehicle,
									as: "vehicleOfImage",
								},
							],
						},
						{
							model: TimePoint,
							as: "tripTimePoint",
							include: [{model: Point, as: "point"}],
						},
					],
				},
				{
					model: SeatTicket,
					as: "ticketSeatId",
					include: [
						{
							model: Seats,
							as: "seatofticket",
						},
					],
				},
				{
					model: PointTicket,
					as: "ticketPointId",
					include: [
						{
							model: TimePoint,
							as: "timepointTicket",
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
						},
					],
				},
			],
		});
		res.status(200).send(detailTicket);
	} catch (error) {
		res.status(500).send(error);
	}
};
const deleteTicket = async (req, res) => {
	const {id} = req.params;
	try {
		await Ticket.destroy({
			where: {
				id,
			},
		});
		res.status(200).send(`Đã xóa ticket có id là: ${id}`);
	} catch (error) {
		res.status(500).send(error);
	}
};
const updateTicket = async (req, res) => {
	const {id} = req.params;
	const {status, totalAmount, note, userId, numberPhone, name, pickUpId, dropOffId, PointpickUpId, PointdropOffId, payment_method, payment_status} = req.body;
	try {
		await Ticket.update(
			{status, totalAmount, note, payment_method, payment_status},
			{
				where: {
					id,
				},
			}
		);
		await User.update(
			{name, numberPhone},
			{
				where: {
					id: userId,
				},
			}
		);
		await PointTicket.update(
			{
				timepointId: PointpickUpId,
			},
			{
				where: {id: pickUpId},
			}
		);
		await PointTicket.update(
			{
				timepointId: PointdropOffId,
			},
			{
				where: {id: dropOffId},
			}
		);
		res.status(200).send("update ticket thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};

const confirmTicket = async (req, res) => {
	const {id} = req.params;

	try {
		await Ticket.update(
			{status: "confirm"},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).send("update ticket thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};

const cancelTicket = async (req, res) => {
	const {id} = req.params;

	try {
		const detailTicket = await Ticket.findOne({
			where: {
				id,
			},
			include: [
				{
					model: SeatTicket,
					as: "ticketSeatId",
					include: [
						{
							model: Seats,
							as: "seatofticket",
						},
					],
				},
			],
		});
		detailTicket.status = "cancel";
		await detailTicket.save();
		detailTicket.ticketSeatId.forEach(async (seat) => {
			await Seats.update(
				{status: "chưa đặt"},
				{
					where: {
						id: seat.seatofticket.id,
					},
				}
			);
		});

		res.status(200).send("Hủy vé thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};

const bookingTicket = async (req, res) => {
	const {note, totalAmount, userId, tripPassengerId, pointPickup, pointDropoff, listSeat} = req.body;
	try {
		const ticketA = await Ticket.findOne({
			where: {
				user_id: userId,
				tripPassengerId: tripPassengerId,
			},
		});
		if (!ticketA) {
			const newTicket = await Ticket.create({
				note,
				totalAmount,
				user_id: userId,
				tripPassengerId,
				payment_method: req.body.payment_method,
				payment_status: req.body.payment_status || "pending",
			});
			if (newTicket) {
				const newPointPickUpTicket = await PointTicket.create({
					typePoint: "pickup",
					timepointId: pointPickup,
					ticketId: newTicket.id,
				});
				const newPointDropOffTicket = await PointTicket.create({
					typePoint: "dropoff",
					timepointId: pointDropoff,
					ticketId: newTicket.id,
				});
				listSeat.forEach(async (seat) => {
					let seatTicket = await SeatTicket.create({
						ticketId: newTicket.id,
						seatId: seat.id,
					});
					const seatUpdate = await Seats.findOne({
						where: {
							id: seat.id,
						},
					});
					seatUpdate.status = "đã đặt";
					await seatUpdate.save();
				});

				// Thêm socket.io để gửi thông báo realtime
				req.app.io.emit("newTicketBooked", {
					ticketId: newTicket.id,
					userId: userId,
					timestamp: new Date(),
				});
			}

			return res.status(200).json({
				success: true,
				message: "Đặt vé thành công",
			});
		}
		return res.status(404).json({
			success: false,
			message: "Đặt vé không thành công",
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
module.exports = {
	createTicket,
	updateTicket,
	getAllTicket,
	getDetailTicket,
	deleteTicket,
	bookingTicket,
	cancelTicket,
	getAllTicketId,
	confirmTicket,
	getAllTicketTrip,
};
