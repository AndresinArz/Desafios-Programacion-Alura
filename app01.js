let numeros = [1,2,3,4,5];

function calcularCuadrados(lista) {
    let cuadrados = lista.map(numero => numero * numero);
    return cuadrados;
}

let cuadrados = calcularCuadrados(numeros);
console.log(cuadrados);
