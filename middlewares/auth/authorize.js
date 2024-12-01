const authorize = (arrType) => (req, res, next) => {
  const { user } = req;
  if (arrType.findIndex((item) => item === user.type) > -1) {
    next();
  } else {
    res.status(403).send("Bạn không có quyền thực thi");
  }
};

module.exports = {
  authorize,
};
