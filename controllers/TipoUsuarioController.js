const TipoUsuario = require("../models/TipoUsuario");

exports.GetAllTipoUsuario = (req, res, next) => {
  TipoUsuario.GetAllTipoUsuario()
    .then((result) => {
      res
        .status(200)
        .json({ message: "All data was fetched", result: result[0][0] });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
