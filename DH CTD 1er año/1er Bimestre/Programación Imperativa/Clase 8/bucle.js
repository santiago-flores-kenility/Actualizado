/*
Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
*/
/*
function siguientes(num) {
    //el i = num+1, porque no hay que mostrar el número inicial, sino los siguientes
    for (i = num+1; i <= num + 10; i++) {
        console.log(i);
    }
}
siguientes(22);
*/
/*
function tresEnTres(min,max) {
    for (i=0;i<=max;i+=3){
        if (i >min){
            console.log(i);
        }
    }
}
tresEnTres(8,50)
*/
/*
Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
*/
/*
function sumatoria() {
    let acum = 0;
    for (i = 0; i <= 100; i++) {
        acum = acum + i
        console.log(acum)
    }
    console.log(acum)
}
sumatoria()
*/
/*
Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
*/
/*
function factorial(num) {
    let cont=1;
    for (i=1;i<num;i++){
        cont = cont*i
        //console.log(cont);
    }
    return cont
}
console.log(factorial(9));
*/

