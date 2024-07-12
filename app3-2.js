// DESAFÍO III: HORA DE PRACTICAR

// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona 
//...a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calculoIMC(peso, altura) {
    return peso / (altura^2);
}

let altura = 1.60;
let peso = 61;
let resultado = calculoIMC(peso, altura);
console.log(resultado);

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero -1);
    }
}
let numero = 4;
let resultado = calcularFactorial(numero);
console.log(resultado);

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, 
//...y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
//...Para esto, considera la cotización del dólar igual a R$4,80.
function conversionADolares(valorAConvertirEnDolares) {
    return valorDeUnDolarEnPesosMx * valorAConvertirEnDolares;
}

let valorDeUnDolarEnPesosMx = 20.00;
let valorAConvertirEnDolares = 1000.00;
let resultado = conversionADolares(valorAConvertirEnDolares);
console.log(resultado);


// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//...utilizando la altura y la anchura que se proporcionarán como parámetros.
function areaSalaRectangular(altura, anchura) {
    return anchura * altura;
}

function perimetroSalaRectangular(altura, anchura) {
    return altura*2 + anchura*2
}
let altura = 3;
let anchura = 5;

let resultadoArea = areaSalaRectangular(altura, anchura);
console.log(resultadoArea);

let resultadoPerimetro = perimetroSalaRectangular(altura, anchura);
console.log(resultadoPerimetro);


// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//...utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaSalaCircular(Pi, radio) {
    let area = Pi * (radio * radio);
    return area;
}

function perimetroSalaCircular(Pi, radio) {
    let perimetro = 2 * Pi * radio;
    return perimetro;
}

let Pi = 3.14;
let radio = 6;

let resultadoAreaCircular = areaSalaCircular(Pi, radio);
console.log(resultadoAreaCircular);
let resultadoPerimetroCircular = perimetroSalaCircular(Pi, radio);
console.log(resultadoPerimetroCircular);

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numeroMultplicar) {
    for (let i = 1; i < 10; i++) {
        let resultadoMultiplicar = numeroMultplicar * i;
        console.log(`${numeroMultplicar} * ${i} = ${resultadoMultiplicar}`)
        
    }
}

tablaMultiplicar(5);