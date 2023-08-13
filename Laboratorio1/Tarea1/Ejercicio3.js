function euclides(a, b) {
    if (b === 0) {
        return a;
    } else {
        return euclides(b, a % b);
    }
}

const obtenerMaxComDiv = () => {
    const [num1, num2, num3] = prompt("Ingrese tres números separados por comas (por ejemplo, 12, 16, 20): ").split(",").map((num) => parseInt(num));
    const mcd = euclides(num1, euclides(num2, num3));
    alert(`El Máximo Común Divisor (MCD) de ${num1}, ${num2} y ${num3} es: ${mcd}`);
}
