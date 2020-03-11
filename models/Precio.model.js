const numbersWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

class Precio {
  precio;
  /**
   * @param {numbre} precio
   */
  constructor(precio) {
    if (precio !== null || precio !== undefined) this.precio = precio;
  }
  getPrecio = () => "$" + numbersWithCommas(this.precio);
  getRealPrecio = () => this.precio;
}

export default Precio;
