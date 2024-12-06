"use strict";
// require("dotenv").config();
const fs = require("fs"); //file stream: đọc file
const path = require("path"); //đường dẫn tới file
const Sequelize = require("sequelize");
const basename = path.basename(__filename); //lấy tên 1 file name
const env = process.env.NODE_ENV || "development"; //chọn môi trường
const config = require(__dirname + "/../config/config.json")[env]; //đọc file config, để lấy ra
const db = {};

//kết nối database
let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//nạp model để khai báo
fs.readdirSync(__dirname)
	.filter((file) => {
		return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
		db[model.name] = model; // db tham chiếu cả model
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//gọi model thông qua biến db, dùng db để thao tác model
module.exports = db;
