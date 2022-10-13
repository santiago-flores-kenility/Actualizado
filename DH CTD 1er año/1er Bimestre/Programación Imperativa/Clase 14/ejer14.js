let comparacion = (num1, num2, num3) =>
    num1 > num2 && num1 > num3
        ? true
        : num2 > num1 && num2 > num3
            ? false
            : num3 > num1 && num3 > num2
                ? "Ha ganado el tercero"
                : "Intente nuevamente";

//console.log(comparacion(6, 6, 7));

let comparar2 = (valor1, valor2) =>
    typeof valor1 === "number" && typeof valor2 === "number"
        ? valor1 > valor2
            ? valor1
            : valor1 === valor2
                ? "Los números son iguales"
                : valor2
        : "Usted se ha equivocado";

//console.log(comparar2(6, "hola"));

// a. Obtener en un nuevo array las edades menores a 18.
// b. Obtener en un nuevo array las edades mayor o igual a 18.
// c. Obtener en un nuevo array las edades igual a 18.
// d. Obtener el menor.
// e. Obtener el mayor.
// f. Obtener el promedio de edades.
// g. Incrementar en 1 todas las edades.

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
function F_edades(el_array) {
    let menores = []
    let mayores = []
    let dieciocho = []
    let mayor = el_array[0]
    let menor = el_array[0]
    let promedio = 0
    let incremento = []
    for (i = 0; i < el_array.length; i++) {
        if (el_array[i] < 18) {
            menores.push(el_array[i])
        }
        if (el_array[i] > 18) {
            mayores.push(el_array[i])
        }
        if (el_array[i] === 18) {
            dieciocho.push(el_array[i])
        }
        if (mayor < el_array[i]) {
            mayor = el_array[i]
        }
        if (menor > el_array[i]) {
            menor = el_array[i]
        }
        promedio += el_array[i]
        incremento.push(el_array[i] + 1)
    }
    console.log(menores);
    console.log(mayores);
    console.log(dieciocho);
    console.log(mayor);
    console.log(menor);
    console.log(promedio / el_array.length);
    console.log(incremento);
}
//F_edades(edades)

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: true,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

/*  Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
    Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
    Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
    Obtener la cuenta con el titular de la misma más joven.
    Obtener un array con las cuentas habilitadas.
    Obtener un array con las cuentas deshabilitadas.
    Obtener la cuenta con el menor saldo.
    Obtener la cuenta con el mayor saldo.
*/

function menos30(arreglo) {
    arraymenos30=[]
    for (i=0;i<arreglo.length;i++){
        if (arreglo[i].edadTitular<30){
            arraymenos30.push(arreglo[i])
        }
    }
    return arraymenos30
}
function mas30(arreglo) {
    arraymas=[]
    for (i=0;i<arreglo.length;i++){
        if (arreglo[i].edadTitular>=30){
            arraymas.push(arreglo[i])
        }
    }
    return arraymas    
}
function menorIgual(arreglo) {
    amenigual=[]
    for (i=0;i<arreglo.length;i++){
        if (arreglo[i].edadTitular<=30){
            amenigual.push(arreglo[i])
        }
    }
    return amenigual   
}
function masjoven(arreglo) {
    joven=arreglo[0]
    for (i=0;i<arreglo.length;i++){
        if (arreglo[i].edadTitular<joven.edadTitular){
            joven=arreglo[i]
        }
    }
    return joven
}
function habilitadas(arreglo) {
    a_habi=[]
    for (i=0;i<arreglo.length;i++){
        if (arreglo[i].estaHabilitada){
            a_habi.push(arreglo[i])
        }
    }
    return a_habi   
}
function deshabilitadas(arreglo) {
    a_deshabi=[]
    for (i=0;i<arreglo.length;i++){
        if (!arreglo[i].estaHabilitada){
            a_deshabi.push(arreglo[i])
        }
    }
    return a_deshabi       
}
function menorSaldo(arreglo) {
    menor= arreglo[0]
    for (i=0;i<arreglo.length;i++){
        if (arreglo[i].saldo<menor.saldo){
            menor=arreglo[i]
        }
    }
    return menor
}
function mayorSaldo(arreglo) {
    mayor= arreglo[0]
    for (i=0;i<arreglo.length;i++){
        if (arreglo[i].saldo>mayor.saldo){
            mayor=arreglo[i]
        }
    }
    return mayor
}
function generarID(arreglo) {
    for (i=0;i<arreglo.length;i++){
        arreglo[i].ID=i
    }   
    return arreglo
}
function buscarPorId(arreglo, id) {
    for (i=0;i<arreglo.length;i++){
        if (arreglo[i].ID===id){
            return arreglo[i]
        }
    }
    return null
}
function filtrarPorSaldos (arreglo, saldo) {
    a_saldo=[]
    for (i=0;i<arreglo.length;i++){
        if (arreglo[i].saldo<saldo){
            a_saldo.push(arreglo[i])
        }
    }
    return a_saldo
}
function incrementarSaldo(arreglo,id,saldo) {
    if (buscarPorId(arreglo,id)!=null){
        arreglo[i].saldo+=saldo
        return arreglo[i]
    }
    else
    return undefined
}
/*
Extras:
Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas 
y agregue a cada elemento(objeto literal) una propiedad llamada id con un valor Numérico

Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, 
en caso de encontrar retornar la cuenta(él objeto literal completo), caso contrario retornar null

Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas 
y un saldo(Number), deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro

Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, 
un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, 
caso contrario retornar undefined reutilizando la función  buscarPorId
*/
function principal() {
    console.log("Obtener un nuevo array de cuentas cuyas edades sean menores a 30.");
    console.log(menos30(arrayCuentas));
    console.log("Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.");
    console.log(mas30(arrayCuentas));
    console.log("Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.");
    console.log(menorIgual(arrayCuentas));
    console.log("Obtener la cuenta con el titular de la misma más joven.");
    console.log(masjoven(arrayCuentas));
    console.log("Obtener un array con las cuentas habilitadas.");
    console.log(habilitadas(arrayCuentas));
    console.log("Obtener un array con las cuentas deshabilitadas.");
    console.log(deshabilitadas(arrayCuentas));
    console.log("Obtener la cuenta con el menor saldo.");
    console.log(menorSaldo(arrayCuentas));
    console.log("Obtener la cuenta con el mayor saldo.");
    console.log(mayorSaldo(arrayCuentas));
    console.log("GenerarID");
    console.log(generarID(arrayCuentas));
    console.log("Buscar por ID");
    console.log(buscarPorId(arrayCuentas,3));
    console.log("Filtrar por Saldos");
    console.log(filtrarPorSaldos(arrayCuentas,3000));
    console.log("Incrementar Saldo");
    console.log(incrementarSaldo(arrayCuentas,4,1500));
}

principal()