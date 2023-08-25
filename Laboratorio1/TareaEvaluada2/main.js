const uniqueSort = () => {
    let conjuntoNumeros = [];
    while (conjuntoNumeros.length === 0) {
        const input = prompt("Ingrese un conjunto de números separados por coma (,)\nNota: cualquier texto ingresado será eliminado automáticamente").split(",");
        conjuntoNumeros = input.map(item => parseInt(item)).filter(item => !isNaN(item));
        if (conjuntoNumeros.length === 0) {
            alert("No se ingresó ningún número válido.")
        }
    }
    const conjuntoNumerosSinDuplicados = conjuntoNumeros.filter((item, index, array) => array.indexOf(item) === index);
    const conjuntoNumerosSinDuplicadosOrdenados = conjuntoNumerosSinDuplicados.sort((a, b) => a - b);
    alert("El conjunto tras eliminar duplicados y ordenar es: " + conjuntoNumerosSinDuplicadosOrdenados.join(", ") + ".");
}

document.addEventListener("DOMContentLoaded", uniqueSort);