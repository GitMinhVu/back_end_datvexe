const express = require("express");
const {adminLogin} = require("../controllers/admin.controller");
const adminRouter = express.Router();

// Define the admin login route
adminRouter.post("/auth/admin/login", adminLogin);

module.exports = {
	adminRouter,
};
