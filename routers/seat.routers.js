const express = require("express");
const {
  getAllSeats,
  createSeat,
  deleteSeats,
  updateSeats,
  getDetailSeat,
} = require("../controllers/seat.controller");
const { checkExist } = require("../middlewares/validations/checkExist");
const { Seats } = require("../models");

const SeatRouter = express.Router();

SeatRouter.post("/", createSeat);
SeatRouter.get("/", getAllSeats);
SeatRouter.get("/:id", getDetailSeat);
SeatRouter.delete("/:id", deleteSeats);
SeatRouter.put("/:id", checkExist(Seats), updateSeats);

module.exports = { SeatRouter };
