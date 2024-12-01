const express = require("express");
const {getAllImgVehicle, deleteImgVehicle, updateImgVehicle, getDetailImgVehicle, createImgVehicle} = require("../controllers/imageVehicle.controller");
const {checkExist} = require("../middlewares/validations/checkExist");
const {ImageVehicle} = require("../models");
const {uploadImage} = require("../middlewares/upload/uploadImages");

const ImageVehicleRouter = express.Router();

ImageVehicleRouter.post("/", uploadImage("imagevehicle"), createImgVehicle);
ImageVehicleRouter.get("/", getAllImgVehicle);
ImageVehicleRouter.get("/:id", getDetailImgVehicle);
ImageVehicleRouter.delete("/:id", deleteImgVehicle);
ImageVehicleRouter.put("/:id", checkExist(ImageVehicle), updateImgVehicle);

module.exports = {ImageVehicleRouter};
