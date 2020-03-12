import Producto from "./Producto.model.js";
class ElementoPedido {
  /**
   * @property {Producto} producto
   * @prop {number} cantidad
   */
  _producto;
  _cantidad;
  _total;
  /**
   * @param {Producto} producto
   * @param {number} cantidad
   */
  constructor(producto, cantidad) {
    this._producto = producto;
    this._cantidad = cantidad;
  }
  getCantidad = () => this._cantidad;
  getDescripcion = () => {
    let { getNombre } = this._producto;
    return `${this._cantidad} x ${getNombre()} $${this.getTotal()}`;
  };
  getTotal = () => this._producto.getPrecio() * this._cantidad;
}
export default ElementoPedido;
