// ? Models
import Fecha from "./Fecha.model.js";
import Tiempo from "./Tiempo.model.js";
import Cliente from "./Cliente.model.js";
import ElementoPedido from "./ElementoPedido.model.js";
import Precio from "./Precio.model.js";

class Pedido {
  _fecha;
  _hora;
  _cliente;
  _elementosPedidos;
  _fullTotal;
  /**
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Cliente} cliente
   * @param {Array.<ElementoPedido>} elementosPedidos
   */
  constructor({ fecha, hora, cliente, elementosPedidos }) {
    this._fecha = fecha;
    this._hora = hora;
    this._cliente = cliente;
    this._elementosPedidos = elementosPedidos;
  }
  getResumen = () => {
    let { getFecha } = this._fecha;
    let { getFormato24Horas } = this._hora;
    let total = 0,
      cantidad = 0;
    this._elementosPedidos.forEach(elemento => {
      total += elemento.getTotal();
      cantidad += elemento.getCantidad();
    });
    this._fullTotal = new Precio(total);
    return `${getFecha()} ${getFormato24Horas()} ${
      this._elementosPedidos.length
    } con ${cantidad} productos -total ${this._fullTotal.getPrecio()}`;
    // elementosPedidos[x],getCantidad();
  };
  getNumeroElementos = () => this._elementosPedidos.length;
  getNumeroProductos = () => {
    let cantidad = 0;
    this._elementosPedidos.forEach(elemento => {
      cantidad += elemento.getCantidad();
    });
    return cantidad;
  };
  getCostoTotal = () => {
    if (this.fullTotal) {
      return this._fullTotal.getPrecio();
    } else {
      let total = 0;
      this._elementosPedidos.forEach(elemento => {
        total += elemento.getTotal();
      });
      this._fullTotal = new Precio(total);
      return this._fullTotal.getPrecio();
    }
  };
  agregarElemento = elemento => {
    this._elementosPedidos.push(elemento);
  };
  listarElemento = () => {
    this._elementosPedidos.forEach(elemento => {
      console.log(elemento.getDescripcion());
    });
  };
}
export default Pedido;
