const uniqueSort = () => {
    let conjuntoNumeros = [];
    let cantidadDeNumeros = parseInt(prompt("Ingrese la cantidad de números que desea que el conjunto tenga:"));

    while (isNaN(cantidadDeNumeros) || cantidadDeNumeros <= 0) {
        alert("No se ingresó ningún número válido.");
        cantidadDeNumeros = parseInt(prompt("Ingrese la cantidad de números que desea que el conjunto tenga:"));
    }

    for (let i = 0; i < cantidadDeNumeros; i++) {
        let numero = parseInt(prompt("Ingrese el número en posición " + (i + 1) + ":"));
        while (isNaN(numero)) {
            alert("No se ingresó ningún número válido.");
            numero = parseInt(prompt("Ingrese el número en posición " + (i + 1) + ":"));
        }
        conjuntoNumeros.push(numero);
    }

    const conjuntoNumerosSinDuplicados = conjuntoNumeros.filter((item, index, array) => array.indexOf(item) === index);
    const conjuntoNumerosSinDuplicadosOrdenados = conjuntoNumerosSinDuplicados.sort((a, b) => a - b);
    alert("El conjunto tras eliminar duplicados y ordenar es: " + conjuntoNumerosSinDuplicadosOrdenados.join(", ") + ".");
}

document.addEventListener("DOMContentLoaded", uniqueSort);