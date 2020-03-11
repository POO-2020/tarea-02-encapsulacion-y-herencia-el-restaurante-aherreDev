import Producto from "./Producto.model.js";
class ElementoPedido {
  /**
   * @property {Producto} producto
   * @prop {number} cantidad
   */
  producto;
  cantidad;
  _total;
  /**
   * @param {Producto} producto
   * @param {number} cantidad
   */
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
  getCantidad = () => this.cantidad;
  getDescripcion = () => {
    let { getNombre } = this.producto;
    return `${this.cantidad} x ${getNombre()} $${this.getTotal()}`;
  };
  getTotal = () => this.producto.getPrecio() * this.cantidad;
}
export default ElementoPedido;
