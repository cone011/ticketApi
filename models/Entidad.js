const db = require("../config/database");
const EntidadScript = require("../scripts/EntidadScript");

module.exports = class Entidad {
  constructor(IdEntidad, Nombre, Encargado, EstaActivo) {
    this.IdEntidad = IdEntidad;
    this.Nombre = Nombre;
    this.Encargado = Encargado;
    this.EstaActivo = EstaActivo;
  }

  static GetAllEntidad() {
    return db.query(EntidadScript.GetAllEntidad);
  }
};
