// const multer = require("multer");
// const mkdirp = require("mkdirp");

// const uploadImage = (type) => {
//   const made = mkdirp.sync(`./public/images/${type}`);

//   const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, `./public/images/${type}`); //setup chỗ cần lưu file
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + "_" + file.originalname); // đặt lại tên cho file
//     },
//   });
//   const upload = multer({
//     storage: storage,
//     fileFilter: function (req, file, cb) {
//       const extendsionImage = ["png", "jpg", "jpeg"];
//       let lengthExtendsion = 0;
//       for (let i = file.originalname.length - 1; i >= 0; i--) {
//         if (file.originalname[i] != ".") {
//           lengthExtendsion++;
//         } else {
//           break;
//         }
//       }
//       let extendsion = file.originalname.slice(-lengthExtendsion).toLowerCase();
//       const check = extendsionImage.includes(extendsion);
//       if (check) {
//         cb(null, true);
//       } else {
//         cb(new Error("Đuôi file không hợp lệ"));
//       }
//     },
//   });
//   return upload.single(type);
// };

// module.exports = {
//   uploadImage,
// };



const multer = require("multer");
const mkdirp = require("mkdirp");
const path = require("path"); // Import thêm module 'path'

const uploadImage = (type) => {
  mkdirp.sync(`./public/images/${type}`); // Tạo thư mục nếu chưa có

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`); // Setup chỗ lưu file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname); // Đặt lại tên file
    },
  });

  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      console.log('Uploading file:', file.originalname);
      console.log('Detected extension:', path.extname(file.originalname).toLowerCase());
  
      const allowedExtensions = [".png", ".jpg", ".jpeg"];
      const fileExtension = path.extname(file.originalname).toLowerCase();
  
      if (allowedExtensions.includes(fileExtension)) {
          cb(null, true); // File hợp lệ
      } else {
          cb(new Error("Đuôi file không hợp lệ")); // File không hợp lệ
      }
  }
  });

  return upload.single(type); // Chỉ upload 1 file
};

module.exports = {
  uploadImage,
};
