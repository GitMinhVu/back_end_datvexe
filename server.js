//express là framework nodejs để tạo server
const express = require("express");
var cors = require("cors");
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
var Fingerprint = require("express-fingerprint");
const path = require("path");
const { sequelize } = require("./models/index");
const { rootRouter } = require("./routers");
const app = express();
// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       version: "1.0.0",
//       title: "Booking ticket API",
//       description: "Booking ticket API Information",
//       contact: {
//         name: "Amazing Developer",
//       },
//       servers: ["http://localhost:7000"],
//     },
//   },
//   // ['.routes/*.js']
//   apis: ["./routers/index.js"],
// };
// const swaggerDocs = swaggerJsDoc(swaggerOptions);

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
app.listen(port, async () => {
  console.log("App listening on " + port);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
