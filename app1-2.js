// DESAFÍO I: HORA DE PRACTICAR (QUERYSELECTOR, FUNCTION, BOTONES, ALERTAS, SUMA, IF-ELSE)

// 1. Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
// https://github.com/alura-es-cursos/js-curso-2/tree/main

// 2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: 
//..."Hora del Desafío".
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";

// 3.Crea una función que muestre en la consola el mensaje "El botón fue clicado" 
//...siempre que se presione el botón "Console".
function mostrarMensajeEnLaConsola() {
    console.log("El botón fue clicado")
}

// 4. Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
//...preguntando el nombre de una ciudad de Brasil. 
//...Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: 
//..."Estuve en {ciudad} y me acordé de ti".
function mostrarAlerta() {
    let ciudad = prompt("Ingrese el nombre de una ciudad en Brasil:")
    alert(`"Estuve en ${ciudad} y me acordé de ti".`)
}

// 5. Crea una función que muestre una alerta con el mensaje: 
//..."Yo amo JS" siempre que se presione el botón "Alerta".
function mostrarAlertaAlerta() {
    alert("Yo amo JS")
}

// 6. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function sumaDeDosNumeros() {
    let numero1 = parseInt(prompt("Ingrese un número:"));
    let numero2 = parseInt(prompt("ingrese otro número:"));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let resultado = numero1 + numero2;
        alert(resuldato);
    } else {
        alert("Por favor, ingrese números válidos");
    }
    
}