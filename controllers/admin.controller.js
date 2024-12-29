const jwt = require("jsonwebtoken");
const {User} = require("../models");

const adminLogin = async (req, res) => {
	try {
		const {email, password} = req.body;
		console.log("Login attempt:", {email, password}); // Debug log

		const admin = await User.findOne({
			where: {
				email,
				type: "ADMIN",
			},
		});
		console.log("Found admin:", admin); // Debug log

		if (admin) {
			const token = jwt.sign(
				{
					id: admin.id,
					email: admin.email,
					type: admin.type,
				},
				"vu2002"
			);

			res.status(200).send({
				id: admin.id,
				email: admin.email,
				type: admin.type,
				token,
			});
		} else {
			res.status(401).send("Invalid admin credentials");
		}
	} catch (error) {
		console.log("Error:", error); // Debug log
		res.status(500).send(error);
	}
};

module.exports = {
	adminLogin,
};
