class Tiempo {
  _hora;
  _minuto;
  _periodo;
  /**
   * @param {number} hora
   * @param {number} minuto
   * @param {string} periodo
   */
  constructor({ hora, minuto, periodo }) {
    this._hora = hora;
    this._minuto = minuto;
    this._periodo = periodo;
  }
  getFormato24Horas = () => {
    let format;
    if (this.periodo === "AM") {
      format = `${this._hora}:${this._minuto}`;
    } else {
      format = `${this._hora + 12}:${this._minuto}`;
    }
    return format;
  };
  getFormato12Horas = () => {
    return `${this._hora}:${this._minuto} ${this._periodo}`;
  };
}

export default Tiempo;
