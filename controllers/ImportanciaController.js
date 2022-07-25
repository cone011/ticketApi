const Importancia = require("../models/Importancia");

exports.GetAllImportancia = (req, res, next) => {
  Importancia.GetAllImportancia()
    .then((result) => {
      res
        .status(200)
        .json({ message: "All Importancia was fetched", result: result[0][0] });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
