const db = require("../config/database");

const UsuarioScript = require("../scripts/UsuarioScript");

module.exports = class Usuario {
  constructor(
    IdUsuario,
    IdTipoUsuario,
    Nombre,
    Apellido,
    Correo,
    Telefono,
    IdEntidad,
    Ubicacion,
    Imagen,
    Observacion,
    EstaActivo
  ) {
    this.IdUsuario = IdUsuario;
    this.IdTipoUsuario = IdTipoUsuario;
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Correo = Correo;
    this.Telefono = Telefono;
    this.IdEntidad = IdEntidad;
    this.Ubicacion = Ubicacion;
    this.Imagen = Imagen;
    this.Observacion = Observacion;
    this.EstaActivo = EstaActivo;
  }

  static GetAllUsuario() {
    return db.query(UsuarioScript.GetAllUsuario);
  }

  static GetObjectByIdUsuario(IdUsuario) {
    return db.query(`${UsuarioScript.GetObjectByIdUsuario}(${IdUsuario})`);
  }

  static GetSearchUsuario(sqlSearch) {
    return db.query(`${UsuarioScript.GetSearchUsuario}('${sqlSearch}')`);
  }

  static InsertUsuario(
    IdTipoUsuario,
    Nombre,
    Apellido,
    Correo,
    Telefono,
    IdEntidad,
    Ubicacion,
    Imagen,
    Observacion
  ) {
    return db.query(
      `${UsuarioScript.InsertUsuario}(${IdTipoUsuario}, '${Nombre}', '${Apellido}', '${Correo}', '${Telefono}', ${IdEntidad}, '${Ubicacion}', '${Imagen}', '${Observacion}')`
    );
  }

  static UpdateUsuario(
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
  ) {
    return db.query(
      `${UsuarioScript.UpdateUsuario}(${IdTipoUsuario}, '${Nombre}', '${Apellido}', '${Correo}', '${Telefono}', ${IdEntidad}, '${Ubicacion}', '${Imagen}', '${Observacion}', ${IdUsuario})`
    );
  }

  static DeleteUsuario(IdUsuario) {
    return db.execute(`${UsuarioScript.DeleteUsuario}(${IdUsuario})`);
  }
};
