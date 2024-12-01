const express = require("express");
const {Ticket} = require("../models");
const {createTicket, updateTicket, getAllTicket, getDetailTicket, deleteTicket, bookingTicket, cancelTicket, getAllTicketId, confirmTicket, getAllTicketTrip} = require("../controllers/ticket.controller");
const {checkExist} = require("../middlewares/validations/checkExist");
const {authenticate} = require("../middlewares/auth/authenticate");
const {authorize} = require("../middlewares/auth/authorize");
const ticketRouter = express.Router();

ticketRouter.post("/", authenticate, authorize(["ADMIN"]), createTicket);
ticketRouter.post("/booking", bookingTicket);
ticketRouter.get("/", getAllTicket);
ticketRouter.get("/getall", getAllTicketId);
ticketRouter.get("/trip", getAllTicketTrip);
ticketRouter.get("/:id", getDetailTicket);
ticketRouter.put("/:id", updateTicket);
ticketRouter.put("/cancel/:id", cancelTicket);
ticketRouter.put("/confirm/:id", confirmTicket);

ticketRouter.delete("/:id", authenticate, authorize(["ADMIN"]), checkExist(Ticket), deleteTicket);
module.exports = {
	ticketRouter,
};
