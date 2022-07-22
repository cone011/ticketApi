const { validationResult } = require("express-validator/check");

const Usuario = require("../models/Usuario");

const ValidationValue = require("../util/ValidationValue");

exports.GetAllUsuario = (req, res, next) => {
  Usuario.GetAllUsuario()
    .then((result) => {
      res
        .status(200)
        .json({ message: "All Users was fetched", result: result[0][0] });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.GetObjectByIdUsuario = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, please look the values");
    error.statusCode = 422;
    throw error;
  }
  const IdUsuario = req.params.IdUsuario;
  Usuario.GetObjectByIdUsuario(IdUsuario)
    .then((result) => {
      res
        .status(200)
        .json({ message: "The user was fetched", result: result[0][0] });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.GetSearchUsuario = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("please validate the user you wanna search");
    error.statusCode = 422;
    throw error;
  }
  const search = req.params.search;
  Usuario.GetSearchUsuario(search)
    .then((result) => {
      res.status(200).json({ message: "Users Find it", result: result[0][0] });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(500);
    });
};

exports.InsertUsuario = (req, res, next) => {
  const erros = validationResult(req);
  ValidationValue.Validate(erros);

  /*if (!req.file) {
    const error = new Error("No image provided.");
    error.statusCode = 422;
    throw error;
  }*/

  const IdTipoUsuario = req.body.IdTipoUsuario;
  const Nombre = req.body.Nombre;
  const Apellido = req.body.Apellido;
  const Correo = req.body.Correo;
  const Telefono = req.body.Telefono;
  const IdEntidad = req.body.IdEntidad;
  const Ubicacion = req.body.Ubicacion;
  const Observacion = req.body.Observacion;
  //const Imagen = req.file.path;
  const Imagen = null;

  Usuario.InsertUsuario(
    IdTipoUsuario,
    Nombre,
    Apellido,
    Correo,
    Telefono,
    IdEntidad,
    Ubicacion,
    Imagen,
    Observacion
  )
    .then((result) => {
      res.status(201).json({ message: "Insert Correct", result: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.UpdateUsuario = (req, res, next) => {
  const errors = validationResult(req);
  ValidationValue.Validate(errors);

  /*if (!req.file) {
    const error = new Error("No image provided.");
    error.statusCode = 422;
    throw error;
  }*/

  const IdTipoUsuario = req.body.IdTipoUsuario;
  const Nombre = req.body.Nombre;
  const Apellido = req.body.Apellido;
  const Correo = req.body.Correo;
  const Telefono = req.body.Telefono;
  const IdEntidad = req.body.IdEntidad;
  const Ubicacion = req.body.Ubicacion;
  const Observacion = req.body.Observacion;
  //const Imagen = req.file.path;
  const Imagen = null;
  const IdUsuario = req.body.IdUsuario;

  Usuario.UpdateUsuario(
    IdTipoUsuario,
    Nombre,
    Apellido,
    Correo,
    Telefono,
    IdEntidad,
    Ubicacion,
    Imagen,
    Observacion,
    IdUsuario
  )
    .then((result) => {
      res.status(201).json({ message: "Update Correct", result: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.DeleteUsuario = (req, res, next) => {
  const errors = validationResult(req);
  ValidationValue.Validate(errors);

  const IdUsuario = req.params.IdUsuario;

  Usuario.DeleteUsuario(IdUsuario)
    .then((result) => {
      res.status(201).json({ message: "Delete Correct", result: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
