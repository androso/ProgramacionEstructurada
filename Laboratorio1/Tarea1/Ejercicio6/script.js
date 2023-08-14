function calcularPorcentaje(numero, porcentaje) {
    return (numero * porcentaje) / 100;
  }

  const numeroIngresado = parseFloat(prompt("Ingresa un número:"));
  const porcentajeIngresado = parseFloat(prompt("Ingresa el porcentaje a calcular:"));

  const resultado = calcularPorcentaje(numeroIngresado, porcentajeIngresado);

  console.log(`El ${porcentajeIngresado}% de ${numeroIngresado} es: ${resultado}`);
  