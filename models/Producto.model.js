// ? Models
import Precio from "./Precio.model.js";

class Producto {
  precio;
  nombre;
  constructor(precio, nombre) {
    /**
     * @param {Precio} precio
     */
    this.precio = precio;
    this.nombre = nombre;
  }
  getDescription = () => {
    let { getPrecio } = this.precio;
    return `${this.nombre} ${getPrecio()}`;
  };
  getPrecio = () => this.precio.getRealPrecio();
  getNombre = () => this.nombre;
}
export default Producto;
