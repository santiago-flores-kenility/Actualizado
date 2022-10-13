/*
Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
*/
/*
function siguientes(num){
    for (let i=num+1;i<=num+10;i++){
        console.log(i);
    }
}
siguientes(-47)
*/
//Imprimir los números entre el 5 y el 20, saltando de tres en tres.
/*
for (let i=5;i<=20;i+=3){
    console.log(i);
}
*/
//Escribir un programa que muestre la sumatoria de todos los números
//entre el 0 y el 100
/*
let cont =0
for (i=0;i<=100;i++){
    cont +=i;
    console.log(cont);
}
*/
/*
Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
*/

function factorial(num){
    let acum = 1
    for (i=1;i<=num;i++){
        acum *= i
        console.log(acum);
    }
}
factorial(5)

/*
Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.
*/
/*
function fibo(num) {
    let muestro = 0
    menor = 0
    mayor = 1
    for (i = 0; i <= num; i++) {
        muestro = mayor + menor
        menor = mayor
        mayor = muestro
        console.log(muestro);
    }
}
fibo(10)
*/