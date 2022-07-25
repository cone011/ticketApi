const Tipo = require("../models/Tipo");

exports.GetAllTipo = (req, res, next) => {
  Tipo.GetAllTipo()
    .then((result) => {
      res
        .status(200)
        .json({ message: "All Tipo was fetched", result: result[0][0] });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
