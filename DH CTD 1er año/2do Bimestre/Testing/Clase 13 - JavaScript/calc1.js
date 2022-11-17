// const prompt = require("prompt-sync")({singint: true});

// lvl 1 
let sumar =(a, b)=> a + b;

console.log(sumar(5, 5));

let restar =(a, b)=> a - b;


console.log(restar(6, 5));

let multiplicar = (a, b)=> a * b;


console.log(multiplicar(5, 5));

let dividir = (a, b) => a / b;


console.log(dividir(10, 5));

// lvl 2

console.log("Vamos a empezar a probar las funciones")
let a = 6
let b = 4
// let a = parseInt(prompt("Ingresar el primer numero :  "))
// let b = parseInt(prompt("Ingresar el segundo numero:  "))

console.log("el resultado de la suma es: " + sumar(a,b) + " y la resta es : "+ restar(a,b))

// ------------------------------------------------------------------------------------- //

let c = parseInt(prompt("Ingresar el primer numero: "))
let d = parseInt(prompt("Ingresa el segundo numero: "))

console.log("el resultado de la multiplicacion es: " + multiplicar(c, d))

// ------------------------------------------------------------------------------------- //

let e = parseInt(prompt("Ingresar el primer numero:  "))
let f = parseInt(prompt("Ingresar el segundo numero:  "))

console.log("el resultado de la division es :  "+dividir(e,f))

// ------------------------------------------------------------------------------------- //


console.log("el resultado de la division es: " +dividir(10,0))

// ------------------------------------------------------------------------------------- //


let cuadradoDeUnNumero = (a) => a * a;
console.log(cuadradoDeUnNumero(5))