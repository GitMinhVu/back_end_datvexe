const express = require("express");
const {getAllPassenger, createPassenger, getDetailPassenger, deletePassenger, updatePassenger, updateImagePassenger} = require("../controllers/passenger.controller");
const {uploadImage} = require("../middlewares/upload/uploadImages");

const {checkExist} = require("../middlewares/validations/checkExist");
const {PassengerCarCompany} = require("../models");

const PassengerRouter = express.Router();

PassengerRouter.post("/", createPassenger);
PassengerRouter.get("/", getAllPassenger);
PassengerRouter.get("/:id", getDetailPassenger);
PassengerRouter.delete("/:id", deletePassenger);
PassengerRouter.put("/:id", updatePassenger);
PassengerRouter.put("/upload/:id", uploadImage("passenger"), updateImagePassenger);
module.exports = {PassengerRouter};
