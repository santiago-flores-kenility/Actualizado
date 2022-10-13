// 1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de
// menor a mayor o no.
// a. si están ordenados retornar true
// b. caso contrario retorna false
// ejemplos de arrays

let num1 = [4, 9, 2, 5, 6, 7, 1, 2]; // false
let num2 = [1, 2, 3, 4, 5, 6, 7, 8]; // true

function ordenados(arreglo) {
    for (i = 0; i < arreglo.length - 1; i++) {
        if (arreglo[i] > arreglo[i + 1]) {
            return false;
        }
    }
    return true;
}

//console.log(ordenados(num2));

// 2. Desarrollar una función que genere una matriz, deberá recibir por parámetros la
// cantidad de filas y columnas y retornar con valores secuenciales numéricos.

function generarmatriz(filas, columnas) {
    let arrayfila = [];
    let matriz = [];
    let cont = 1;
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            arrayfila.push(cont);
            cont++;
        }
        matriz.push(arrayfila);
        arrayfila = [];
    }
    return matriz;
}

console.table(generarmatriz(5, 6));

// 3. Dado él siguiente array de personas
const personas = [
    {
        nombre: "Arlene Barr",
        legajo: 3955,
        edad: 33,
    },
    {
        nombre: "Roslyn Torres",
        legajo: 3925,
        edad: 27,
    },
    {
        nombre: "Cleo Lopez",
        legajo: 1965,
        edad: 34,
    },
    {
        nombre: "Daniel Malone",
        legajo: 3925,
        edad: 30,
    },
    {
        nombre: "Ethel Leon",
        legajo: 1915,
        edad: 34,
    },
    {
        nombre: "Harding Mitchell",
        legajo: 1905,
        edad: 25,
    },
];
/*- Desarrollar una función llamada orderAscLegajo que reciba por parámetro él
 array de personas y realice un ordenamiento de forma ascendente*/

function orderAscLegajo(array) {
    for (let m = 0; m < array.length; m++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i].legajo > array[i + 1].legajo) {
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }
    }
    return array
}

//console.log(orderAscLegajo(personas));

/*


 - Desarrollar una función llamada orderDescLegajo que reciba por parámetro
 él array de personas y realice un ordenamiento de forma descendente

*/
function orderDescLegajo(array) {
    for (let m = 0; m < array.length; m++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i].legajo < array[i + 1].legajo) {
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }
    }
    return array
}

//console.log(orderDescLegajo(personas));

/*
 - Pensar de qué forma se puede realizar los dos ítems anteriores en una sola
 función
*/
function ordenar(arreglo) {
    console.log(orderAscLegajo(arreglo));
    console.log(orderDescLegajo(arreglo));
}

//console.log(ordenar(personas));


// 4. Teniendo 3 arrays:




//Realiza las siguientes tareas:
//- Crea una matriz con esta forma:

// function crearmatriz(a1,a2,a3) {
//     matriz = []
//     matriz.push(a1,a2,a3)
//     return [a1,a2,a3]
// }

//console.table(matri);
//crearmatriz = (a1,a2,a3) => [a1,a2,a3]
//matriz = crearmatriz(fila1,fila2,fila3)
//console.table(matriz)
fila1 = [4, 9, 2]
fila2 = [3, 5, 7]
fila3 = [8, 1, 6]
let matri = [fila1, fila2, fila3]
//  Luego, a partir de esta matriz, desarrollar una función que reciba la matriz por
//  parámetro y retorne lo solicitado:
//  - Función que reciba por parámetro la fila y retornar la suma de la misma.
//  - Función que retorne en un array la suma de las diagonales [15 , 15], sumando él
// centro las dos veces

function diagonales(matriz) {
    let diag1 = 0;
    let diag2 = 0;
    for (x = 0; x < matriz.length; x++) {
        diag1 += matriz[x][x]
        diag2 += matriz[x][(matriz.length-x)-1]
    }
    return [diag1,diag2];
}

console.log(diagonales(matri));

// - Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]
// - Función que retorne en un array los elementos mayores a 5
// - Función que retorne un objeto literal con dos propiedades
// pares : [4, 2, 8, 6], // array de pares
// impares : [9, 3, 5, 7, 1], // array de impares
function literal(mat) {
    let pares = []
    let impares = []

    for (let x = 0; x < mat.length; x++) {
        const element = mat[x];
        for (let y = 0; y < mat.length; y++) {
            const element = mat[y];
            if (mat[x][y] % 2 === 0) {
                pares.push(mat[x][y])
            } else {
                impares.push(mat[x][y])
            }
        }
    }

    return { pares: pares, impares: impares }
}
//let objliteral=literal(matriz)
//console.log(objliteral);
