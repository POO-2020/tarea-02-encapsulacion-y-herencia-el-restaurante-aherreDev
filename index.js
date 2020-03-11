// ! ---------------------
// ! TEST SCRIPT
// ! ---------------------

// ? Models

import Cliente from "./models/Cliente.model.js";
import Direccion from "./models/Direccion.model.js";
import ElementoPedido from "./models/ElementoPedido.model.js";
import Pedido from "./models/Pedido.model.js";
import Fecha from "./models/Fecha.model.js";
import Precio from "./models/Precio.model.js";
import Producto from "./models/Producto.model.js";
import Restaurante from "./models/Restaurante.model.js";
import Tiempo from "./models/Tiempo.model.js";

// * Cliente

let cliente = new Cliente(
  "Roman Herrera",
  new Direccion(
    "Alfonso Reyes",
    434,
    3,
    "Jardines Vista",
    "333",
    "Colima",
    "Colima"
  ),
  "312312312"
);
console.log(cliente.getPerfil());

// * Producto

let producto = new Producto(new Precio(312), "Paracetamol");

console.log(producto.getDescription());

// * ElementoPedido

let elementoPedido = new ElementoPedido(producto, 10);

console.log(elementoPedido.getDescripcion());

// * Pedido

let pedido = new Pedido(
  new Fecha(2020, 1, 10),
  new Tiempo(10, 20, "AM"),
  cliente,
  [elementoPedido]
);

console.log(pedido.getResumen());

console.log(pedido.getNumeroElementos());

console.log(pedido.getNumeroProductos());

console.log(pedido.getCostoTotal());

let producto2 = new Producto(new Precio(10), "Agua");
let elementoPedido2 = new ElementoPedido(producto2, 2);

console.log(pedido.agregarElemento(elementoPedido2));
console.log(pedido.getResumen());

pedido.listarElemento();

// * Restaurante

let restaurante = new Restaurante(
  "Roman's Restaurant",
  "312123",
  "Alfonsadasd asd",
  [producto, producto2],
  [pedido]
);

restaurante.listarPedidos();
restaurante.listarProductos();

restaurante.registrarPedido(pedido);
restaurante.listarPedidos();

let producto3 = new Producto(new Precio(15), "Salsa");
restaurante.registrarProducto(producto3);
restaurante.listarProductos();
