const prompt = require("prompt-sync")({ sigint: true });


/*
Micro desafío 1 = 30
Micro desafío 2 =20
*/
//Funciones Simples
//1 - convertir pulgadas en centímetros
function conversor(pulgadas){
    return pulgadas * 2.54
}
let valortomado = prompt("Escribe el valor en pulgadas: ")

console.log(conversor(valortomado))

//2 - Recibir string y convertirlo a URL
function strAUrl(cadena){
    return "http://www."+cadena+".com"
}
let stringtomado = prompt("Escribe una palabra: ")
console.log(strAUrl(stringtomado))

//3 - Signos de admiración
function admiracion(cadena){
    return "¡¡¡"+cadena+"!!!";
};
let stringtomado = prompt("Escribe una palabra: ");
console.log(admiracion(stringtomado));

//4 - Funcion calculo de edad de perros
function edadperros(edad){
    return edad*7;
};
let edad = prompt("Escribe la edad de su perro: ");
console.log(edadperros(edad));

//como función expresada
let edadpichichos=function(edad){
    return edad*7
}
let edadDelPerro = prompt("Escribe la edad de su perro: ");
console.log(edadperros(edadDelPerro));

//5 - devolver valor hora
function ValorHora(sueldo){
    return sueldo/40;
};
let TuSueldo = prompt("Escribe su sueldo: ");
console.log(ValorHora(TuSueldo));

//6 - Cálculo del IMC
function CalculadorIMC(altura, kg){
    return kg/(altura*altura);
};
let TuAltura = prompt("Escriba su altura en metros: ");
let TuPeso = prompt("Escribe su peso en kilogramos: ");
console.log(CalculadorIMC(TuAltura,TuPeso));

// como función arrow
let CalculadorIMC = (altura, kg) => kg/(altura*altura)
let TuAltura = prompt("Escriba su altura en metros: ");
let TuPeso = prompt("Escribe su peso en kilogramos: ");
console.log(CalculadorIMC(TuAltura,TuPeso));

//7 - Texto a mayúsculas
let textoEnMinusculas = prompt("Escriba un texto en minúsculas: ");
console.log(textoEnMinusculas.toUpperCase());

//8 - Devolución tipo de dato
let dato = prompt("Escriba el parámetro: ");
console.log(typeof dato);

//9 - Devolución de circunferencia a partir del radio
let radio = prompt("Escriba el radio: ");
console.log(Math.PI * radio)