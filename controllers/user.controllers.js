const {User, sequelize} = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {Op} = require("sequelize");
const nodemailer = require("nodemailer");

const getAllUser = async (req, res) => {
	const {name} = req.query;
	try {
		if (name) {
			const userList = await User.findAll({
				where: {
					name: {
						[Op.like]: `%${name}%`,
					},
				},
			});
			res.status(200).send(userList);
		} else {
			const userList = await User.findAll();
			res.status(200).send(userList);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const getDetailUser = async (req, res) => {
	const {id} = req.params;

	try {
		const detailUser = await User.findOne({
			where: {
				id,
			},
		});
		res.status(200).send(detailUser);
	} catch (error) {
		res.status(500).send(error);
	}
};

const updateUser = async (req, res) => {
	const {id} = req.params;
	const {name, email, password, numberPhone, type, dateOfBirth, address, gender} = req.body;
	try {
		const detailUser = await User.findOne({
			where: {
				id,
			},
		});
		//tạo một chuỗi ngầu nhiên
		var salt = bcrypt.genSaltSync(10);
		//mã hóa salt + password
		var hashPassword = bcrypt.hashSync(password, salt);
		detailUser.name = name;
		detailUser.email = email;
		detailUser.password = hashPassword;
		detailUser.numberPhone = numberPhone;
		detailUser.type = type;
		detailUser.dateOfBirth = dateOfBirth;
		detailUser.address = address;
		detailUser.gender = gender;
		await detailUser.save();
		res.status(200).send(detailUser);
	} catch (error) {
		res.status(500).send(error);
	}
};

const updateUserBooking = async (req, res) => {
	const {id} = req.params;
	const {name, numberPhone} = req.body;
	try {
		await User.update(
			{name, numberPhone},
			{
				where: {
					id,
				},
			}
		);
		const userupdate = await User.findOne({
			where: {
				id,
			},
		});
		res.status(200).send(userupdate);
	} catch (error) {
		res.status(500).send(error);
	}
};

const deleteUser = async (req, res) => {
	const {id} = req.params;
	try {
		await User.destroy({
			where: {
				id,
			},
		});
		res.status(200).send("Deleted User Successfully!");
	} catch (error) {
		res.status(500).send(error);
	}
};
const register = async (req, res) => {
	const {name, email, password, numberPhone, type, dateOfBirth, address, gender} = req.body;

	try {
		// Check both email and phone number existence
		const [userByEmail, userByPhone] = await Promise.all([User.findOne({where: {email}}), User.findOne({where: {numberPhone}})]);

		if (userByEmail) {
			return res.status(404).send("Email đã tồn tại");
		}

		if (userByPhone) {
			return res.status(404).send("Số điện thoại đã tồn tại");
		}

		var salt = bcrypt.genSaltSync(10);
		var hashPassword = bcrypt.hashSync(password, salt);

		const newUser = await User.create({
			name,
			email,
			password: hashPassword,
			numberPhone,
			type,
			dateOfBirth,
			address,
			gender,
		});

		res.status(201).send(newUser);
	} catch (error) {
		res.status(500).send(error);
	}
};
const login = async (req, res) => {
	const {email, password} = req.body;
	const user = await User.findOne({
		where: {
			email,
		},
	});
	if (user) {
		const isAuth = bcrypt.compareSync(password, user.password);
		if (isAuth) {
			const token = jwt.sign({email: user.email, type: user.type}, "vu2002", {expiresIn: "365d"});
			res.status(200).send({message: "Đăng nhập thành công", token: token, user});
		} else {
			res.status(404).send({message: "Mật khẩu không đúng!"});
		}
	} else {
		res.status(404).send({message: "Không tìm thấy tài khoản!"});
	}
};
const uploadAvatar = async (req, res) => {
	const {user, file} = req;
	const protocol = req.protocol;
	const host = req.headers.host;
	const fullUrlImages = `${protocol}://${host}/${file.path}`;
	const userFound = await User.findOne({
		where: {
			email: user.email,
		},
	});
	userFound.avatar = fullUrlImages;
	await userFound.save();
	res.send(file);
};
const getAllTrip = async (req, res) => {
	try {
		const [result] = await sequelize.query(
			`select users.name , tickets.trip_id from users
      inner join tickets on users.id = tickets.user_id
      inner join trips on  trips.id = tickets.trip_id 
      inner join stations as fromSta on fromSta.id = trips.fromStation
      inner join stations as toSta on toSta.id = trips.toStation
      `
		);
		res.status(200).send(result);
	} catch (error) {
		res.status(500).send(error);
	}
};

const forgotPassword = async (req, res) => {
	const {email} = req.body;
	try {
		const user = await User.findOne({where: {email}});
		if (!user) {
			return res.status(404).send({message: "Email không tồn tại"});
		}

		// Tạo mã xác nhận ngẫu nhiên 6 số
		const verificationCode = Math.floor(100000 + Math.random() * 900000);

		// Lưu mã và thời gian hết hạn vào database
		user.resetPasswordCode = verificationCode;
		user.resetPasswordExpires = Date.now() + 600000; // 10 phút
		await user.save();

		// Cấu hình nodemailer
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "tominhvuhn@gmail.com",
				pass: "lsuabthhwbtdurtx", //
			},
		});

		// Gửi email
		await transporter.sendMail({
			from: "tominhvuhn@gmail.com",
			to: email,
			subject: "Mã xác nhận đặt lại mật khẩu",
			text: `Mã xác nhận của bạn là: ${verificationCode}`,
		});

		res.status(200).send({message: "Mã xác nhận đã được gửi đến email của bạn"});
	} catch (error) {
		res.status(500).send(error);
	}
};

const resetPassword = async (req, res) => {
	const {email, code, newPassword} = req.body;
	try {
		const user = await User.findOne({
			where: {
				email,
				resetPasswordCode: code,
				resetPasswordExpires: {[Op.gt]: Date.now()},
			},
		});

		if (!user) {
			return res.status(400).send({message: "Mã xác nhận không hợp lệ hoặc đã hết hạn"});
		}

		// Mã hóa mật khẩu mới
		const salt = bcrypt.genSaltSync(10);
		const hashPassword = bcrypt.hashSync(newPassword, salt);

		// Cập nhật mật khẩu và xóa mã xác nhận
		user.password = hashPassword;
		user.resetPasswordCode = null;
		user.resetPasswordExpires = null;
		await user.save();

		res.status(200).send({message: "Đặt lại mật khẩu thành công"});
	} catch (error) {
		res.status(500).send(error);
	}
};
module.exports = {
	register,
	login,
	uploadAvatar,
	getAllTrip,
	getAllUser,
	deleteUser,
	getDetailUser,
	updateUser,
	updateUserBooking,
	forgotPassword,
	resetPassword,
};
