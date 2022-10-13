function generar() {
    let cont = 1
    let arreglo = []
    let matriz = []
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            arreglo.push(cont)
            cont++
        }
        matriz.push(arreglo)
        arreglo = []
    }
    return matriz
}
//console.table(generar())

// Dada una matriz, recorrer sus valores y sumar solo los números que estén por
// encima o sean iguales a 10, pero menores que 1000.
// https://codesandbox.io/s/matrices-ejercicio-tgulv
arreglo =
    [
        [10, 3, 2, 1, 4, 7],
        [5, 5, 10, 100, 4],
        [5, 125, 10, 1020, 4],
        [5, 5, 5097, 100, 4]
    ];

function recorrer(matriz) {
    let count = 0;
    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] >= 10 && matriz[i][j] < 1000) {
                count += matriz[i][j]
            }
        }
    }
    return count
}
//console.log(recorrer(arreglo));

// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el
// usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada
// columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1,
// columna 1, dia 2, etcétera.
// a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada
// fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la
// fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.

let mes=[[1135,2500,900,1600,2800,3650,1100],
[1750,1890,1900,1300,898,1750,2800],
[1700,1150,1690,1900,1770,4500,2560],
[8000,1250,1430,2100,1980,1270,950]]
console.table(mes)
function gastosSemanales(matriz, numsemana){
    let gastos=0
    for (x=0;x< matriz.length;x++){
        gastos+=matriz[numsemana-1][x]
    }
    return gastos
}
//console.log("Los gastos semanales son: "+gastosSemanales(mes,2));

// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar
// el total de un día en particular, por ejemplo del día 3, acá también tengamos en
// cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.

totalDia = (matriz,dia)=> matriz[Math.floor((dia)/7)][(dia-1)%7]
//console.log(totalDia(mes, 18));

// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver
// este último punto?

function recorrermes(matriz) {
    let sumador=0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            sumador += matriz[i][j]
        }
    }
    return sumador
}
//console.log(recorrermes(mes));

// Opcional
// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más
// gastos se realizaron.


function opcional(matriz) {
    let acumsemana =0
    let semanaDeMasGastos =0
    let cuentaDias =0
    let acumDia =0
    let diaDeMasGastos=0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acumsemana += matriz[i][j]
            if (acumDia<matriz[i][j]){
                acumDia =matriz[i][j]
                diaDeMasGastos = cuentaDias +1
            }
            cuentaDias++
        }
        if (semanaDeMasGastos < acumsemana){
            semanaDeMasGastos=i+1
        }
        acumsemana=0
    }
console.log("la semana de mas gastos es la: "+semanaDeMasGastos);
console.log("el día de mas gastos es: "+ diaDeMasGastos + " con $"+acumDia);

}

opcional(mes)
