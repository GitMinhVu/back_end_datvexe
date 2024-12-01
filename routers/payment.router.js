const express = require("express");
const {paymentController} = require("../controllers/pay.controller");

const PaymentRouter = express.Router();

PaymentRouter.post("/", paymentController);

module.exports = {PaymentRouter};
