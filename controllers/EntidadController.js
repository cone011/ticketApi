const Entidad = require("../models/Entidad");

exports.GetAllEntidad = (req, res, next) => {
  Entidad.GetAllEntidad()
    .then((result) => {
      res
        .status(200)
        .json({ message: "all entidad was fetched", result: result[0][0] });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
