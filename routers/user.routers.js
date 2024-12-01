const express = require("express");
const {User} = require("../models");
const {register, login, uploadAvatar, getAllTrip, getAllUser, getDetailUser, updateUser, deleteUser, updateUserBooking} = require("../controllers/user.controllers");
const {checkExist} = require("../middlewares/validations/checkExist");
const {uploadImage} = require("../middlewares/upload/uploadImages");
const {authenticate} = require("../middlewares/auth/authenticate");
const userRouter = express.Router();
userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.get("/get", getAllUser);
userRouter.get("/getdetail/:id", getDetailUser);
userRouter.put("/update/:id", updateUser);
userRouter.put("/updatebooking/:id", updateUserBooking);

userRouter.delete("/delete/:id", deleteUser);

//upload file

userRouter.post("/upload", authenticate, uploadImage("avatar"), uploadAvatar);
userRouter.get("/all-trip", getAllTrip);
module.exports = {
	userRouter,
};
