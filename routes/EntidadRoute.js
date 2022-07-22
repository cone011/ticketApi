const path = require("path");

const express = require("express");
const router = express.Router();

const entidadController = require("../controllers/EntidadController");

router.get("/Entidad", entidadController.GetAllEntidad);

module.exports = router;
