// DESAFÍO II:HORA DE PRACTICAR (FUNCIONES, CALCULAR EL DOBLE, PROMEDIO, NÚMERO MAYOR, EL CUADRADO.)

// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarHola() {
    console.log("¡Hola, mundo!");
}

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
    console.log(`"¡Hola, ${nombre}"`);
}
mostrarHolaNombre("Andrés"); //Estudiar más este tema//

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function calcularDoble(numero) {
    return numero * 2;
}
let numero = 10;
let resultado = calcularDoble(numero);

console.log(resultado); //Estudiar más este tema//


// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3)/3;
}
let numero1 = 7;
let numero2 = 9;
let numero3 = 8;
let resultado = calcularPromedio(numero1, numero2, numero3);
console.log(resultado);

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(num1, num2) {
   if (num1 > num2) {
    return num1;
   } else {
    return num2;
   }
}

let num1 = 6;
let num2 = 8;
let encontrarNumeroMayor = numeroMayor(num1, num2);
console.log(encontrarNumeroMayor);


// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numeroAlCuadrado(num) {
    return num * num
}

let num = 8;
let resultado = numeroAlCuadrado(num)
console.log(resultado);