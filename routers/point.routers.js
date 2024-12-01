const express = require("express");
const {getAllPointByStationId, getDetailPoint, updatePoint, deletePoint, createPoint} = require("../controllers/point.controller");

const PointRouter = express.Router();

PointRouter.get("/", getAllPointByStationId);
PointRouter.get("/:id", getDetailPoint);
PointRouter.put("/:id", updatePoint);
PointRouter.delete("/:id", deletePoint);
PointRouter.post("/", createPoint);

module.exports = {PointRouter};
