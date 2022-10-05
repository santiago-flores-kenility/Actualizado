// Ejercicio 1
// Dado el siguiente arreglo de objetos:

let personas = [
    {
        nombre: "Raul",
        edad: 25
    },
    {
        nombre: "Jose",
        edad: 9
    },
    {
        nombre: "Mina",
        edad: 7
    },
    {
        nombre: "Lucas",
        edad: 15
    },
    {
        nombre: "Jorge",
        edad: 32
    },
    {
        nombre: "Luciano",
        edad: 26
    },
    {
        nombre: "Lucrecia",
        edad: 75
    },
]

// Realizar una función que reciba por parámetro dicho arreglo y retorne un nuevo array 
// con los objetos cuya edad sea mayor o igual a 26
function mas26(matriz) {
    let retornomas26 = []
    for (x = 0; x < matriz.length; x++) {
        if (matriz[x].edad >= 26) {
            retornomas26.push(matriz[x])
        }
    }
    return retornomas26
}
console.log("Array de personas de 26 años o mas: ", mas26(personas));

// Ejercicio 2
// Realizar una función que reciba por parámetro el arreglo de objetos del ejercicio 1 y un String. 
// Esta función deberá ordenar los objetos mediante el algoritmo Bubble Sort según su edad de forma 
// ascendente o descendente según lo indique el string recibido por parámetro, teniendo en cuenta 
// los siguientes criterios:
// Si el String es “ASC” o “asc” encontes ordenar de menor a mayor
// Si el String es “DESC” o “desc” entonces ordenar de mayor a menor

function ordenar(matriz, orden) {
    if (orden.toUpperCase() === "ASC") {
        return ordenar_asc(matriz)
    }
    else
        if (orden.toUpperCase() === "DESC") {
            return ordenar_desc(matriz)
        }
        else {
            return "Error en el parametro de ordenacion..."
        }
}

function ordenar_asc(arreglo) {

    let temp = []
    for (i = 0; i < arreglo.length; i++) {
        for (x = 0; x < arreglo.length - 1; x++) {
            if (arreglo[x].edad > arreglo[x + 1].edad) {
                temp = arreglo[x]
                arreglo[x] = arreglo[x + 1]
                arreglo[x + 1] = temp
            }
        }
    }
    return arreglo
}

console.log("Arreglo ordenado de forma ascendente: ", ordenar(personas, "asc"));

function ordenar_desc(arreglo) {
    let temp = []
    for (i = 0; i < arreglo.length; i++) {
        for (x = 0; x < arreglo.length - 1; x++) {
            if (arreglo[x].edad < arreglo[x + 1].edad) {
                temp = arreglo[x]
                arreglo[x] = arreglo[x + 1]
                arreglo[x + 1] = temp
            }
        }
    }
    return arreglo
}

console.log("Arreglo ordenado de forma descendente: ", ordenar(personas, "desc"));


// Ejercicio 3
// Dada la siguiente matriz: 
let matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]

// Desarrollar una función que retorne la suma de todos los valores de la fila 2.
// Desarrollar una función que retorne un nuevo array que contenga solo los elementos pares
// que se encuentren dentro de la matriz.

function suma(matrix, fila) {
    let sumador = 0
    for (i = 0; i < matrix[fila].length; i++) {
        sumador += matrix[fila][i]
    }
    return "La suma de la fila " + fila + " es " + sumador
}

console.log(suma(matriz, 2));

function pares(matrix) {
    let arrayPares = []
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] % 2 === 0) {
                arrayPares.push(matrix[x][y])
            }
        }
    }
    return "array de nºs pares: " + arrayPares
}

console.log(pares(matriz));

