// ? Models
import Precio from "./Precio.model.js";

class Producto {
  _precio;
  _nombre;
  constructor(precio, nombre) {
    /**
     * @param {Precio} precio
     */
    this._precio = precio;
    this._nombre = nombre;
  }
  getDescription = () => {
    let { getPrecio } = this._precio;
    return `${this._nombre} ${getPrecio()}`;
  };
  getPrecio = () => this._precio.getRealPrecio();
  getNombre = () => this._nombre;
}
export default Producto;
