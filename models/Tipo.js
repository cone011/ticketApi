const db = require("../config/database");
const TipoScript = require("../scripts/TipoScript");

module.exports = class Tipo {
  constructor(IdTipo, Descripcion) {
    this.IdTipo = IdTipo;
    this.Descripcion = Descripcion;
  }

  static GetAllTipo() {
    return db.query(TipoScript.GetAllTipo);
  }
};
