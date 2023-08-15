function esMultiploDe(numero, divisor) {
    return numero % divisor === 0;
}

function multiplos() {
    const numero = parseInt(prompt("Ingrese un número:"));

    if (isNaN(numero)) {
        console.log("Ingresa un número válido");
        return;
    }

    if (numero % 1 !== 0) {
        console.log("Ingresa un número entero");
        return;
    }

    if (esMultiploDe(numero, 5) && esMultiploDe(numero, 17)) {
        console.log(`${numero} es múltiplo de 5 y 17`);
    } else {
        console.log(`${numero} no es múltiplo de 5 y 17`);
    }
}

multiplos();
