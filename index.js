// ! ---------------------
// ! TEST SCRIPT
// ! ---------------------

// ? Models

import Cliente from "./models/Cliente.model.js";
import ClienteFrecuente from "./models/ClienteFrecuente.model.js";
import Direccion from "./models/Direccion.model.js";
import ElementoPedido from "./models/ElementoPedido.model.js";
import Pedido from "./models/Pedido.model.js";
import Fecha from "./models/Fecha.model.js";
import Precio from "./models/Precio.model.js";
import Producto from "./models/Producto.model.js";
import Restaurante from "./models/Restaurante.model.js";
import Tiempo from "./models/Tiempo.model.js";

// * Cliente

let cliente = new Cliente({
  nombre: "Roman Herrera",
  direccion: new Direccion(
    "Alfonso Reyes",
    434,
    3,
    "Jardines Vista",
    "333",
    "Colima",
    "Colima"
  ),
  telefono: "312312312"
});
console.log(cliente.getPerfil());

// * Producto

let producto = new Producto(new Precio(312), "Paracetamol");

console.log(producto.getDescription());

// * ElementoPedido

let elementoPedido = new ElementoPedido(producto, 10);

console.log(elementoPedido.getDescripcion());

// * Pedido

let pedido = new Pedido({
  fecha: new Fecha(2020, 1, 10),
  hora: new Tiempo(10, 20, "AM"),
  cliente: cliente,
  elementosPedidos: [elementoPedido],
  numeroPedido: 10
});

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

let restaurante = new Restaurante({
  nombre: "Roman's Restaurant",
  telefono: "312123",
  direccion: "Alfonsadasd asd",
  productos: [producto, producto2],
  pedidos: [pedido]
});

restaurante.listarPedidos();
restaurante.listarProductos();

console.log("------------");

restaurante.registrarPedido(pedido);
restaurante.listarPedidos();

let producto3 = new Producto(new Precio(15), "Salsa");
restaurante.registrarProducto(producto3);
restaurante.listarProductos();

let CF = new ClienteFrecuente({
  nombre: "Roman Herrera",
  direccion: new Direccion(
    "Esta es una direccion",
    434,
    3,
    "Colonia Ajua",
    "111",
    "Colima",
    "Colima"
  ),
  telefono: "312312312",
  numeroCliente: 123,
  fechaRegistro: new Fecha(2020, 1, 10)
});
console.log(CF.getPerfil());

// * Test CRUD methods of Restaurant
let pedido2 = new Pedido({
  fecha: new Fecha(2020, 1, 10),
  hora: new Tiempo(10, 20, "AM"),
  cliente: cliente,
  elementosPedidos: [elementoPedido],
  numeroPedido: 11
});

console.log(restaurante.registrarPedido(pedido2));
console.log(restaurante.buscarPedido(pedido2));
console.log(restaurante.eliminarPedido(pedido2));
