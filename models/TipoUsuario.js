const db = require("../config/database");

const Script = require("../scripts/TipoUsuarioScript");

module.exports = class TipoUsuario {
  constructor(IdTipoUsuario, Descripcion) {
    this.IdTipoUsuario = IdTipoUsuario;
    this.Descripcion = Descripcion;
  }

  static GetAllTipoUsuario() {
    return db.query(Script.GetAllTipoUsuario);
  }
};
