// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let likes = [15, 8, 25, 4, 23, 42, 23, 58, 36, 24, 52, 13, 63, 0, 33]

function concurso(arraylikes) {
    for (i = 0; i < arraylikes.length; i++) {
        for (j = 0; j < arraylikes.length - 1; j++) {
            if (arraylikes[j] < arraylikes[j + 1]) {
                temp = arraylikes[j]
                arraylikes[j] = arraylikes[j + 1]
                arraylikes[j + 1] = temp
            }
        }
    }
    let prim = arraylikes[0]
    let seg = arraylikes[1]
    let ter = arraylikes[2]
    let ultimo = arraylikes[14]
    return "el 1ro tuvo " + prim + " likes, el 2do " + seg + ", el 3ro " + ter + ", y el último " + ultimo;
}
//console.log(concurso(likes));

// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.
let Temperaturas = [
    {
        dia: 3,
        mes: 5,
        max: 35,
        min: 9
    },
    {
        dia: 30,
        mes: 3,
        max: 23,
        min: 8
    }, {
        dia: 12,
        mes: 4,
        max: 22,
        min: 0
    }, {
        dia: 22,
        mes: 8,
        max: 3,
        min: 1
    },
]

function OrdenarTempMin(tempe) {
    for (i = 0; i < tempe.length; i++) {
        for (j = 0; j < tempe.length - 1; j++) {
            if (tempe[j].min > tempe[j + 1].min) {
                aux = tempe[j]
                tempe[j] = tempe[j + 1]
                tempe[j + 1] = aux
            }
        }
    }
    return tempe
}

//console.log(OrdenarTempMin(Temperaturas));

function OrdenarTempMax(tempe) {
    for (i = 0; i < tempe.length; i++) {
        for (j = 0; j < tempe.length - 1; j++) {
            if (tempe[j].max < tempe[j + 1].max) {
                aux = tempe[j]
                tempe[j] = tempe[j + 1]
                tempe[j + 1] = aux
            }
        }
    }
    return tempe
}

console.log(OrdenarTempMax(Temperaturas));