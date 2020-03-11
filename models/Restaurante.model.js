// ? Models
import Producto from "./Producto.model.js";
import Direccion from "./Direccion.model.js";
import Pedido from "./Pedido.model.js";

class Restaurante {
  nombre;
  telefono;
  direccion;
  productos;
  pedidos;
  /**
   * @param {string} nombre
   * @param {string} telefono
   * @param {Direccion} direccion
   * @param {Array.<Producto>} productos
   * @param {Array.<Pedido>} pedidos
   */
  constructor(nombre, telefono, direccion, productos, pedidos) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
    this.productos = productos;
    this.pedidos = pedidos;
  }
  registrarProducto = producto => {
    this.productos.push(producto);
  };
  listarProductos = () => {
    this.productos.forEach(producto => {
      console.log(producto.getDescription());
    });
  };
  registrarPedido = pedido => {
    this.pedidos.push(pedido);
  };
  listarPedidos = () => {
    this.pedidos.forEach(pedido => {
      pedido.listarElemento();
    });
  };
}
export default Restaurante;
