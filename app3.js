// DESAFÍO III: HORA DE PRACTICAR (BUCLES (WHILE), CONTADORES)

//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle "while".
//... Muestra cada número.
let contador = 1;
while (contador <= 10) {
    console.log(contador)
    contador++;
}


//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle "while".
//... Muestra cada número
let contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}

//3. Crea un programa de cuenta regresiva.
//... Pide un número y cuenta desde 0 hasta ese número utilizando un bucle "while" en la consola del navegador.
let numero = prompt("Ingrese un número, por favor:");
let contador = numero;
while (contador >= 0) {
    console.log(contador);
    contador--;
}


//4. Crea un programa de cuenta progresiva.
//... Pide un número y cuenta desde 0 hasta ese número utilizando un bucle "while" en la consola del navegador.
let numero = prompt("Ingrese un número, por favor:");
let contador = 0;

while (contador <= numero) {
    console.log(contador);
    contador++;
}