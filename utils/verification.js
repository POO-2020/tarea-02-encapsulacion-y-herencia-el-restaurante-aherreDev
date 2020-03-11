export let completedParams = parametros => {
  parametros.filter = parametro =>
    parametro === undefined || parametro === null || parametro === "";
  if (parametros.length > 0) return true;
  console.error(`FALTAN LOS PARAMETROS ${parametros}`);
  return false;
};
