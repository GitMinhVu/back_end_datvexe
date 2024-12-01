const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    //Kiểm tra xem station có tồn tại hay không
    const model = await Model.findOne({
      where: {
        id,
      },
    });
    if (model) {
      next();
    } else {
      res.status(404).send(`Không tồn tại  có id là ${id}`);
    }
  };
};
module.exports = {
  checkExist,
};
