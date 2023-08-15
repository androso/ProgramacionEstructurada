function calcular() {
    const baseMayor = parseFloat(prompt("Ingrese la longitud de la base mayor:"));
    const baseMenor = parseFloat(prompt("Ingrese la longitud de la base menor:"));
    const altura = parseFloat(prompt("Ingrese la altura:"));
    const lado1 = parseFloat(prompt("Ingrese la longitud del primer lado:"));
    const lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado:"));

    if (isNaN(baseMayor) || isNaN(baseMenor) || isNaN(altura) || isNaN(lado1) || isNaN(lado2)) {
        console.log("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    if (baseMayor <= 0 || baseMenor <= 0 || altura <= 0 || lado1 <= 0 || lado2 <= 0) {
        console.log("Los valores deben ser números positivos.");
        return;
    }

    const area = ((baseMayor + baseMenor) * altura) / 2;
    const perimetro = baseMayor + baseMenor + lado1 + lado2;

    console.log(`El área del trapecio es: ${area}`);
    console.log(`El perímetro del trapecio es: ${perimetro}`);
}

calcular();
