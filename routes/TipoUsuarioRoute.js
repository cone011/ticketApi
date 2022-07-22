const path = require("path");

const express = require("express");

const router = express.Router();

const tipoUsuarioController = require("../controllers/TipoUsuarioController");

router.get("/TipoUsuario", tipoUsuarioController.GetAllTipoUsuario);

module.exports = router;
