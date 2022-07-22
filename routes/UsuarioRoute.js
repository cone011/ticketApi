const path = require("path");

const express = require("express");
const { body } = require("express-validator");
const usuarioController = require("../controllers/UsuarioController");

const router = express.Router();

router.get("/Usuario", usuarioController.GetAllUsuario);

router.get(
  "/SearchUsuario",
  [body("search").trim().isLength({ min: 3 })],
  usuarioController.GetSearchUsuario
);

router.get(
  "/Usuario/:IdUsuario",
  [body("IdUsuario").isNumeric().isLength({ min: 1 })],
  usuarioController.GetObjectByIdUsuario
);

router.post(
  "/Usuario",
  [
    body("IdTipoUsuario").isNumeric().isLength({ min: 0 }),
    body("Nombre").trim().isLength({ min: 3 }),
    body("Apellido").trim().isLength({ min: 3 }),
    body("Correo").trim().isEmail().isLength({ min: 10 }),
    body("Telefono").trim().isLength({ min: 3 }),
    body("IdEntidad").isNumeric().isLength({ min: 0 }),
  ],
  usuarioController.InsertUsuario
);

router.post(
  "/UsuerUpdate",
  [
    body("IdTipoUsuario").isNumeric().isLength({ min: 0 }),
    body("Nombre").trim().isLength({ min: 3 }),
    body("Apellido").trim().isLength({ min: 3 }),
    body("Correo").trim().isEmail().isLength({ min: 10 }),
    body("Telefono").trim().isLength({ min: 3 }),
    body("IdEntidad").isNumeric().isLength({ min: 0 }),
  ],
  usuarioController.UpdateUsuario
);

router.delete(
  "/Usuario/:IdUsuario",
  [body("IdUsuario").isNumeric().isLength({ min: 1 })],
  usuarioController.DeleteUsuario
);

module.exports = router;
