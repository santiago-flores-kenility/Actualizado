const prompt = require("prompt-sync")({ sigint: true });

let sumar = (primer, segundo) => parseInt(primer) + parseInt(segundo);
function restar(num1, num2) {
  return num1 - num2;
}
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

console.log("------Testeo de funciones - Calculadora-------");

let valor1 = prompt("Escribe un número: ");
let valor2 = prompt("Escriba otro número: ");

console.log("La suma es... " + sumar(valor1, valor2));
console.log("La resta es... " + restar(valor1, valor2));

let multi1 = prompt("Escribe un tercer número: ");
let multi2 = prompt("Escribe un cuarto número: ");

console.log(
  "La multiplicación de estos dos números es... " + multiplicar(multi1, multi2)
);
console.log(
  "La división de estos dos números es... " + dividir(multi1, multi2)
);
console.log("La división por cero da.... " + dividir(multi1, 0));

let numAlCuadrado = prompt("Escribe un número para elevarlo al cuadrado: ");

let cuadradoDeUnNumero = (aElevar) => multiplicar(aElevar, aElevar);

console.log("El cuadrado es: " + cuadradoDeUnNumero(numAlCuadrado));

let prom1 = prompt("Escribe un número: ");
let prom2 = prompt("Escribe un segundo número: ");
let prom3 = prompt("Escribe un tercer número: ");

let promedioDeTresNumeros = (primero, segundo, tercero) =>
  dividir(
    sumar(sumar(parseInt(primero), parseInt(segundo)), parseInt(tercero)),
    3
  );

console.log("El promedio es es: " + promedioDeTresNumeros(prom1, prom2, prom3));

let calcularPorcentaje = (numero, porcentaje) =>
  multiplicar(dividir(numero, 100), porcentaje);

let total = prompt("Escribe el total: ");
let pidePorcentaje = prompt("Escribe un porcentaje: ");

console.log(
  calcularPorcentaje(total, pidePorcentaje) +
    " es el " +
    pidePorcentaje +
    "% de " +
    total
);

let GeneradorDePorcentaje = (val1, val2) =>
  multiplicar(dividir(val1, val2), 100);

let fraccion = prompt("Escribe la fraccion: ");
let valorA_dividir = prompt("Escribe un total: ");

console.log(GeneradorDePorcentaje(fraccion, valorA_dividir));
