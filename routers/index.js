const express = require("express");
const {CommentRouter} = require("./comment.routers");
const {ImageVehicleRouter} = require("./imageVehicle.routers");
const {passengerCarCompanyRouter, PassengerRouter} = require("./passengerCarCompany.routers");
const {PaymentRouter} = require("./payment.router");
const {PointRouter} = require("./point.routers");
const {RateRouter} = require("./rate.routers");
const {SeatRouter} = require("./seat.routers");
const {stationRouter} = require("./station.routers");
const {ticketRouter} = require("./ticket.router");
const {TimePointRouter} = require("./timepoint.routers");
const {tripRouter} = require("./trip.routers");
const {tripPassengerRouter} = require("./tripPassenger.routers");
const {userRouter} = require("./user.routers");
const {VehiclesRouter} = require("./vehicles.routers");
const {adminRouter} = require("./admin.routers");
const {vnpayController} = require("../controllers/vnpay.controller");

const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouter);
rootRouter.use("/passenger", PassengerRouter);
rootRouter.use("/ticket", ticketRouter);
rootRouter.use("/tripPassenger", tripPassengerRouter);
rootRouter.use("/vehicles", VehiclesRouter);
rootRouter.use("/seats", SeatRouter);
rootRouter.use("/image", ImageVehicleRouter);
rootRouter.use("/comment", CommentRouter);
rootRouter.use("/rate", RateRouter);
rootRouter.use("/timepoint", TimePointRouter);
rootRouter.use("/point", PointRouter);
rootRouter.use("/payment", PaymentRouter);
rootRouter.use("/", adminRouter);
rootRouter.post("/payment/vnpay", vnpayController);

module.exports = {
	rootRouter,
};
