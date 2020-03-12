// ? Models
import Producto from "./Producto.model.js";
import Direccion from "./Direccion.model.js";
import Pedido from "./Pedido.model.js";

class Restaurante {
  _nombre;
  _telefono;
  _direccion;
  _productos;
  _pedidos;
  /**
   * @param {string} nombre
   * @param {string} telefono
   * @param {Direccion} direccion
   * @param {Array.<Producto>} productos
   * @param {Array.<Pedido>} pedidos
   */
  constructor({ nombre, telefono, direccion, productos, pedidos }) {
    this._nombre = nombre;
    this._telefono = telefono;
    this._direccion = direccion;
    this._productos = productos;
    this._pedidos = pedidos;
  }
  registrarProducto = producto => {
    this._productos.push(producto);
  };
  listarProductos = () => {
    this._productos.forEach(producto => {
      console.log(producto.getDescription());
    });
  };
  registrarPedido = pedido => {
    let numero = pedido.getNumeroPedido();
    let exist =
      this._pedidos.findIndex(pedido => pedido.getNumeroPedido() === numero) !==
      -1;
    if (exist) {
      this._pedidos.push(pedido);
    }
    return exist;
  };
  listarPedidos = () => {
    this._pedidos.forEach(pedido => {
      pedido.listarElemento();
    });
  };
  buscarPedido = pedido => {
    let numero = pedido.getNumeroPedido();
    let result = this._pedidos.filter(
      pedido => pedido.getNumeroPedido() === numero
    );
    return result.length > 0 ? result : null;
  };
  eliminarPedido = pedido => {
    let numero = pedido.getNumeroPedido();
    let newPedidos = this._pedidos.filter(
      pedido => pedido.getNumeroPedido() !== numero
    );
    let success = newPedidos.length !== this._pedidos.length;
    this._pedidos = newPedidos;
    return success;
  };
  actualizarPedido = pedido => {
    let numero = pedido.getNumeroPedido();
    let success = false;
    this._pedidos = this._pedidos.map(pedidoI => {
      if (pedidoI.getNumeroPedido() === numero) {
        pedidoI = pedido;
        success = true;
        return pedidoI;
      } else {
        return pedidoI;
      }
    });
    return success;
  };
}
export default Restaurante;
