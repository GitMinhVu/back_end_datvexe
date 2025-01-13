//express là framework nodejs để tạo server
const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

app.io = io;

var cors = require("cors");
var Fingerprint = require("express-fingerprint");
const path = require("path");
const {sequelize} = require("./models/index");
const {rootRouter} = require("./routers");

//Cài ứng dụng sử dụng kiểu json

app.use(express.json());
app.use(cors());
//cài đặt fingerprint
app.use(Fingerprint());

// cài đặt static file
const publicPathDicrectory = path.join(__dirname, "./public");
app.use("/public", express.static(publicPathDicrectory));

//dùng router
// app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs), rootRouter);

app.use("/api/v1", rootRouter);

//Lắng nghe sự kiện kết nối
const port = 7000;
httpServer.listen(port, async () => {
	console.log("App listening on " + port);
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
});

// Thêm vào sau phần khởi tạo socket.io - real-time
io.on("connection", (socket) => {
	//debug
	// console.log("User connected:", socket.id);
	socket.on("customerMessage", (data) => {
		io.emit("messageToAdmin", {
			...data,
			isAdmin: false,
		});
	});

	socket.on("adminMessage", (data) => {
		io.emit("messageToCustomer", {
			...data,
			isAdmin: true,
		});
	});

	socket.on("disconnect", () => {
		console.log("User disconnected:", socket.id);
	});
});
