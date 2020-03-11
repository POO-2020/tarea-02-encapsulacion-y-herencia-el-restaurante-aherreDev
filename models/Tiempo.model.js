class Tiempo {
  hora;
  minuto;
  periodo;
  /**
   * @param {number} hora
   * @param {number} minuto
   * @param {string} periodo
   */
  constructor(hora, minuto, periodo) {
    this.hora = hora;
    this.minuto = minuto;
    this.periodo = periodo;
  }
  getFormato24Horas = () => {
    let format;
    if (this.periodo === "AM") {
      format = `${this.hora}:${this.minuto}`;
    } else {
      format = `${this.hora + 12}:${this.minuto}`;
    }
    return format;
  };
  getFormato12Horas = () => {
    return `${this.hora}:${this.minuto} ${this.periodo}`;
  };
}

export default Tiempo;
