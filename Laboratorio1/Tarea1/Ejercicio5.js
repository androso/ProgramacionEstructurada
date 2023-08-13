const compararStrings = () => {
    const string1 = prompt("Ingrese el primer string");
    const string2 = prompt("Ingrese el segundo string");
    if (string1 === string2) {
        alert(`Los strings son iguales`);
    } else {
        alert(`Los strings no son iguales`);
    }
}