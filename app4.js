//DESAFÍO IV: HORA DE PRACTICAR (CONSOLE.LOG, ALERT, PROMPT, SUMA, RESTA, IF-ELSE, CONTADOR, WHILE, MATH.RANDOM, PARSEINT)

//1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("¡Bienvenidos");

//2. Crea una variable llamada nombre y asígnale tu nombre. 
//...Luego, utiliza console.log para mostrar el mensaje "¡Hola, (tu nombre)!" en la consola del navegador.
let nombre = "Andres";
console.log(`"¡Hola, ${nombre}!"`);

//3. Crea una variable llamada nombre y asígnale tu nombre.
//...Luego, utiliza alert para mostrar el mensaje "¡Hola, (tu nombre)!".
let nombre = "Andres";
alert(`"¡Hola, ${nombre}!`);

//4. Utiliza prompt y haz la siguiente pregunta:
//...¿Cuál es le lenguaje de programación que más te gusta?
//... Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajePreferido = prompt("¿Cuál es le lenguaje de programación que más te gusta?");
let respuesta = lenguajePreferido;
console.log(respuesta);

//5. Crea una variable llamada valor1 y otra llamada valor2, asignándoles valores numéricos de tu elección.
//...Luego, realiza la suma de estos dos valores
//...y almacena el resultado en una tercera variable llamada resultado.
//...Utiliza console.log para mostrar el mensaje "La suma de (valor1)" y "(valor2)" es igual a (resultado)".
let valor1 = 4;
let valor2 = 6;
let resultado = valor1 + valor2;
console.log(`"La suma de ${valor1} y ${valor2} es igual a ${resultado}."`);

//6. Crea una variable llamada valor1 y otra llamada valor2, asignándoles valores numéricos de tu elección.
//...Luego, realiza la resta de estos dos valores
//...y almacena el resultado en una tercera variable llamada resultado.
//...Utiliza console.log para mostrar el mensaje "La diferencia entre (valor1)" y "(valor2)" es igual a (resultado)".
let valor1 = 4;
let valor2 = 6;
let resultado = valor1 - valor2;
console.log(`"La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}."`);

//7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada,
//...utiliza un IF para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola. 
let edad = prompt("Ingrese su edad, por favor:");
if (edad >= 18) {
    console.log("Usted es mayor de edad")
} else {
    console.log("Usted es menor de edad")
}

//8. Crea un variable "numero" y solicita un valor con prompt.
//...Luego, verifica si es positivo, negativo o cero utilizando un IF-ELSE, y muestra el mensaje correspondiente. 
let numero = prompt("Ingrese un número, por favor:");
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es 0");
}

//9. Utiliza un bucle "while" para mostrar los números del 1 al 10 en la consola. 
let contador = 1;
while (contador <=10) {
    console.log(contador);
    contador++;
}

//10. Crea una variable "nota" y asígnale un valor numérico.
//...Utiliza un IF-ELSE para determinar si la nota es mayor o igual a 7 
//...y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 8;
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//11. Utiliza Math.randon para generar cualquier número aleatorio y muestre ese número en la consola. 
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//12. Utiliza Math.random para generar un número entre 1 y 10 y muestre ese número en la consola. 
let numeroAleatorio = parseInt(Math.random()*10) +1;
console.log(numeroAleatorio);

//13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestre ese número en la consola. 
let numeroAleatorioEntero = parseInt(Math.random()*1000) +1;
console.log(numeroAleatorioEntero);



