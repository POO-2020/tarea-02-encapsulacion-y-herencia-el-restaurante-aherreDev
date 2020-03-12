class Direccion {
  _calle;
  _numInt;
  _numExt;
  _col;
  _cp;
  _ciudad;
  _municipio;
  /**
   * @param {string} calle
   * @param {number} numInt
   * @param {numExt} numExt
   * @param {string} col
   * @param {string} cp
   * @param {string} ciudad
   * @param {string} municipio
   */
  constructor(calle, numInt = null, numExt, col, cp, ciudad, municipio) {
    this._calle = calle;
    this._numInt = numInt;
    this._numExt = numExt;
    this._col = col;
    this._cp = cp;
    this._ciudad = ciudad;
    this._municipio = municipio;
  }
  getFormatoCorto = () => `${this._calle} ${this._numExt}`;
  getFormatoLargo = () =>
    `${this._calle} ${this._numInt} ${this._numExt} ${this._col} ${this._cp} ${this._ciudad} ${this._municipio}`;
}

export default Direccion;
