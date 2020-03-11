const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
];

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];

class Fecha extends Date {
  getAños = () => {
    let a = new Date();
    let years = (this - a) / 31540000000;
    return Math.trunc(years);
  };

  getMeses = () => {
    let a = new Date();
    let mes = (this - a) / 2628000000;
    return Math.trunc(mes);
  };

  getSemanas = () => {
    let a = new Date();
    let semana = (this - a) / 604800000;
    return Math.trunc(semana);
  };

  getDias = () => {
    let a = new Date();
    let dia = (this - a) / 86400000;
    return Math.trunc(dia);
  };

  getFecha = () =>
    `${this.getDate()}/${meses[this.getMonth()]}/${this.getFullYear()}`;

  getDiaFecha = () => `${dias[this.getDate()]}`;
}

export default Fecha;
