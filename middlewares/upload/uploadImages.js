const multer = require("multer");
const mkdirp = require("mkdirp");

const uploadImage = (type) => {
  const made = mkdirp.sync(`./public/images/${type}`);

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}`); //setup chỗ cần lưu file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname); // đặt lại tên cho file
    },
  });
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const extendsionImage = ["png", "jpg", "jpeg"];
      let lengthExtendsion = 0;
      for (let i = file.originalname.length - 1; i >= 0; i--) {
        if (file.originalname[i] != ".") {
          lengthExtendsion++;
        } else {
          break;
        }
      }
      let extendsion = file.originalname.slice(-lengthExtendsion).toLowerCase();
      const check = extendsionImage.includes(extendsion);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error("Đuôi file không hợp lệ"));
      }
    },
  });
  return upload.single(type);
};

module.exports = {
  uploadImage,
};
