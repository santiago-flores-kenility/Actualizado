/**
 * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”.
 * Por ejemplo:
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 */

  //len v
  /*
  for (let i=1;i<=100;i++){
    if (i%3===0){
      if(i%5===0){
        console.log("FizzBuzz");
        
      }else{
        console.log("Fizz");    
    }
    }else if(i%5===0){
    
      console.log("Buzz");      
    }
    else{
      console.log(i);
      
  }}
*/


/**
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */
let array = [
	3,
	6,
	67,
	6,
	23,
	11,
	100,
	8,
	93,
	0,
	17,
	24,
	7,
	1,
	33,
	45,
	28,
	33,
	23,
	12,
	99,
	100
];

/**
 * Y el siguiente indice:
 */

let indice = 10;

/**
 * La funcion debera mostrar por consola el numero 6.
 */

// Extra: que pasa si cambias el valor de la variable indice a 10?
// Si tu función esta bien, deberias ver el numero 17 por consola.

// Escribe tu función debajo de esta linea.

// Invoca tu función debajo de esta linea.
function devolver(arreglo,indi) {
		return arreglo[indi]
}

console.log(devolver(array,indice));




/**
 * Escribir una función que dado un número de mes
 * devuelva la cantidad de días de ese mes
 * (suponiendo que no es un año bisiesto).
 *
 * Por ejemplo, si invocamos la función:
 *
 * diasDelMes(1);
 *
 * Esta debera retornar el numero 31,
 * ya que Enero tiene 31 dias.
 */

// Escribe tu función aquí:
function diasDelMes(numeroMes) {
  switch (numeroMes) {
    case 1:
      return 31;
      break;
    case 2:
      return 28;
      break;
    case 3:
      return 31;
      break;
    case 4:
      return 30;
      break;
    case 5:
      return 31;
      break;
    case 6:
      return 30;
      break;
    case 7:
      return 31;
      break;
    case 8:
      return 31;
      break;
    case 9:
      return 30;
      break;
    case 10:
      return 31;
      break;
    case 11:
      return 30;
      break;
    case 12:
      return 31;
      break;
    default:
      break;
  }
}

// E invocala:
console.log(diasDelMes(2));


