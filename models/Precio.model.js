const numbersWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

class Precio {
  _precio;
  /**
   * @param {numbre} precio
   */
  constructor(precio) {
    if (precio !== null || precio !== undefined) this._precio = precio;
  }
  getPrecio = () => "$" + numbersWithCommas(this._precio);
  getRealPrecio = () => this._precio;
}

export default Precio;
