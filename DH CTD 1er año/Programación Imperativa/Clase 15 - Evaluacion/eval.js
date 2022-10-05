
//Ejercicio 1: 
//Desarrollar una función para cada uno de las siguientes apartados: 
//Que reciba por parámetro un número entero y retorne su triple. 
let triple = (num) => num * 3;
//Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos.
let division = (div1, div2) => (div1 != 0 && div2 != 0) ? div1 / div2 : "División por cero";
//Que reciba por parámetro dos números enteros y si ambos son pares retorne la multiplicación de ambos, de lo contrario que retorne su suma.
let pares = (par1, par2) => (par1 % 2 === 0 && par2 % 2 === 0) ? par1 * par2 : par1 + par2;

/*

Ejercicio 2:
Realizar una función que nos ayude a determinar si estamos listos para viajar o no.La misma recibirá por parámetro una edad y un
booleano que indica si tiene pasaje o no.Se deberá evaluar lo siguiente: 
Si es mayor de edad y tiene pasaje, entonces retornaremos un mensaje que diga “Puede viajar”
Si es mayor de edad pero no tiene pasaje, debemos retornar un mensaje que diga “Necesita comprar un pasaje”
Si es menor de edad y tiene pasaje se deberá retornar “Puede viajar solo con permiso legal”
Si es menor de edad y no tiene pasaje entonces se deberá retornar “No puede viajar”
*/
function listos(edad, pasaje) {
    const MAYOR = 18;
    if (edad >= MAYOR) {
        return (pasaje) ? "Puede viajar" : "Necesita comprar un pasaje"
    }
    else {
        return (pasaje) ? "Puede viajar solo con permiso legal" : "No puede viajar"
    }
}



/*
Ejercicio 3:
Dado el siguiente array de objetos:
*/
let ciudades = [
    {
        nombre: "Mar del Plata",
        mesesDeTurismo: 4,
        cantDeTuristasPorMes: 10000
    },
    {
        nombre: "Medellin",
        mesesDeTurismo: 6,
        cantDeTuristasPorMes: 15000
    },
    {
        nombre: "Rio de Janeiro",
        mesesDeTurismo: 8,
        cantDeTuristasPorMes: 320000
    },
    {
        nombre: "Paris",
        mesesDeTurismo: 12,
        cantDeTuristasPorMes: 12000000
    }
]
/*
Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las ciudades 
cuya cantidad de turista por mes sea mayor a 90.000.La función deberá retornar un nuevo arreglo con las ciudades 
que cumplan con la condición antes mencionada.
Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento.
*/

function turistas(listado) {
    filtro = []
    for (let i = 0; i < listado.length; i++) {
        if (listado[i].cantDeTuristasPorMes > 90000) {
            filtro.push(listado[i])
        }
    }
    return filtro
}

function ejercicios() {
    console.log("recibir por parámetro un número entero y retornar su triple");
    console.log(triple(8));
    console.log("recibir por parámetro dos números enteros, verificar que sean distintos de 0 y retornar la división de ambos");
    console.log(division(7, 2));
    console.log("recibir por parámetro dos números enteros y si ambos son pares retorne la multiplicación de ambos, de lo contrario que retorne su suma");
    console.log(pares(6, 3));
    console.log("estamos listos para viajar?");
    console.log(listos(21, true));
    console.log("ciudades cuya cantidad de turistas por mes sea mayor a 90.000");
    console.log(turistas(ciudades));
}
ejercicios()

