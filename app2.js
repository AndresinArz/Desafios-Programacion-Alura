// DESAFÍO II: HORA DE PRACTICAR (CONDICIONALES (IF-ELSE), TEMPLATE STRINGS)

//1. Pregunta al usuario qué día de la semana es. 
//... Si la respuesta es "Sábado" o "Domingo" muestra "¡Buen fin de semana"-
//... De lo contrario, muestra "¡Buena semana!".
let dia = prompt("¿Qué día es hoy?");
if (dia === "Sabado" || dia === "Domingo") {
    alert("¡Buen fin de semana");
} else {
    alert("¡Buena semana!");
}

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt("Ingrese un númerom por favor:");
if (numero < 0) {
    alert("El número es negativo");
} else {
    alert("El número es positivo");
}

//3. Cree un sistema de puntuación para un juego. 
//... Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!"
//... En caso contrario, muestra "Intentalo nuevamente para ganar".
let puntuacion = 80;
let puntuacionJugador = prompt("Ingrese su puntuación:");
if (puntuacionJugador >= puntuacion) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Inténtalo nuevamente para ganar");
}

//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
//...utilizando un template string para incluir el valor del saldo.
let saldoDeCuenta = 200;
alert(`Su saldo disponible es ${saldoDeCuenta}`);

//5. Pide al usuario que ingrese su nombre mediante un Prompt. 
//...Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreUsuario = prompt("Ingrese su nombre, por favor:");
alert(`¡Bienvenido ${nombreUsuario}!`);
