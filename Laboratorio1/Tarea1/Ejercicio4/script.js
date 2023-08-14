const stringIngresado = prompt("Ingresa un string:");

function contarLetraA(str) {
  let contar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      contar++;
    }
  }
  return contar;
}

const cantidadA = contarLetraA(stringIngresado);
console.log(`El número de veces que se repite la letra 'a' en el string es: ${cantidadA}`);