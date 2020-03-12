import Cliente from "./Cliente.model.js";
// import Direccion from "./Direccion.model.js";
// import Fecha from "./Fecha.model.js";

class ClienteFrecuente extends Cliente {
  _numeroCliente;
  _fechaRegistro;
  /**
   *
   * @param {Object} param0
   */
  constructor({ nombre, direccion, telefono, numeroCliente, fechaRegistro }) {
    super({ nombre, direccion, telefono });
    this._numeroCliente = numeroCliente;
    this._fechaRegistro = fechaRegistro;
  }
  getPerfil = () => {
    const { getFecha } = this._fechaRegistro;
    const { getFormatoLargo } = this._direccion;
    return `${this._numeroCliente}, ${getFecha()} ${
      this._nombre
    }, ${getFormatoLargo()}, ${this._telefono}`;
  };
}
export default ClienteFrecuente;
