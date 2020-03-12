// ? Models
import Direccion from "./Direccion.model.js";

class Cliente {
  _nombre;
  _direccion;
  _telefono;
  /**
   * @param {string} nombre
   * @param {Direccion} direccion
   * @param {string} telefono
   */
  constructor({ nombre, direccion, telefono }) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  getPerfil = () => {
    let { getFormatoLargo } = this._direccion;
    return `${this._nombre}, ${getFormatoLargo()}, ${this._telefono}`;
  };
}

export default Cliente;
