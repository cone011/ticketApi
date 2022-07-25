const db = require("../config/database");
const ImportanciaScript = require("../scripts/ImportanciaScript");

module.exports = class Importancia {
  constructor(IdTipoImportancia, Descripcion) {
    this.IdTipoImportancia = IdTipoImportancia;
    this.Descripcion = Descripcion;
  }

  static GetAllImportancia() {
    return db.query(ImportanciaScript.GetAllImportancia);
  }
};
