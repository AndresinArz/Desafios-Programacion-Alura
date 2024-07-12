//DESAFÍO IV: HORA DE PRACTICAR (LISTAS, FUNCIONES, ORDEN INVERSO, PROMEDIO, NUM MAS GRANDE Y EL MÁS PEQUEÑO,
//... SUMA, ENCONTRAR POSICIÓN EN UNA LISTA, DOS LISTAS Y DEVOLUCIÓN DE UNA)

// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];


// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion"
//... con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');


// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarElementos() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
        
    }
}

mostrarElementos();


// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarElementosInverso() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i--) {
        console.log(lenguagesDeProgramacion[i]);
        
    }
}
mostrarElementosInverso();


// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [1,2,3,4,5,6,7];

function promedioElementosLista(listaNumeros) {
    let suma = listaNumeros.reduce((total, numero) => total + numero, 0);
    let promedio = suma/listaNumeros.length;

    return promedio;
}

let promedio = promedioElementosLista(listaNumeros);
console.log(promedio);


// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let listaNumeros = [1,2,3,4,5,6,7];

function mostrarGrandePequeño(listaNumeros) {
    let numMasGrande = Math.max(...listaNumeros);
    let numMasPequeno = Math.min(...listaNumeros);

    console.log(numMasGrande);
    console.log(numMasPequeno);
}
mostrarGrandePequeño(listaNumeros);


// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
let listaNumeros = [1,2,3,4,5,6,7];

function sumarElementos(listaNumeros) {
    let suma = listaNumeros.reduce((total, numero) => total + numero, 0);
    return suma;
}

let resultado = sumarElementos(listaNumeros);
console.log(resultado);


// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, 
//...o -1 si no existe en la lista.
let listaFrutas = ["naranaja", "manzana", "pera", "uva", "fresa"];

function encontrarPosicion(lista, elemento) {
    let posicion = lista.indexOf(elemento);
    return posicion !== -1 ? posicion : -1;

}

let elementoBuscado = "fresa";
let resultado = encontrarPosicion(listaFrutas, elementoBuscado);

if (resultado !== -1) {
    console.log(`La posición de "${elementoBuscado}" en la lista es ${resultado}.`)
} else {
    console.log(`"${elementoBuscado}" no se encuentra en la lista.`)
}


// 10. Crea una función que reciba dos listas de números del mismo tamaño 
//...y devuelva una nueva lista con la suma de los elementos uno a uno.
let lista1 = [1,2,3,4];
let lista2 = [5,6,7,8];

function sumarListas(lista1,lista2) {
    if (lista1.length !== lista2.length) {
        return "Las listas no tienen la misma longitud";
    }

    let suma = [];
    for (let i = 0; i< lista1.length; i++) {
        suma.push(lista1[i] + lista2[i]);
    }

    return suma;
}

let listaSuma = sumarListas(lista1,lista2);
console.log(listaSuma);

// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let numeros = [1,2,3,4,5];

function calcularCuadrados(lista) {
    let cuadrados = lista.map(numero => numero * numero);
    return cuadrados;
}

let cuadrados = calcularCuadrados(numeros);
console.log(cuadrados);