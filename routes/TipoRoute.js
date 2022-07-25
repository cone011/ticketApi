const express = require("express");

const router = express.Router();

const tipoController = require("../controllers/TipoController");

router.get("/Tipo", tipoController.GetAllTipo);

module.exports = router;
