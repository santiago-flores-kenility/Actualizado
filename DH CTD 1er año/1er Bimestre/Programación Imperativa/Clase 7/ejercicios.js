/*let edad = 21; //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)
if (edad % 2 ==1){
    console.log("sabías que tu edad es impar?")
}
if (edad < 0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else if (edad == 21) {
  console.log("Felicitaciones por los 21 años!");
  console.log("Puede pasar al bar y tomar alcohol.");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
}

*/

/*
totalAPagar()
Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.
A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.
*/
/*
function totalAPagar(vehiculo, litrosConsumidos) {
  let precio = 0;
  vehiculo == "coche"
    ? (precio = 86)
    : vehiculo == "moto"
    ? (precio = 70)
    : vehiculo == "autobus"
    ? (precio = 55)
    : precio;
  return litrosConsumidos > 25
    ? 25 + (litrosConsumidos * precio)
    : 50 + (litrosConsumidos * precio);
}
console.log(totalAPagar("coche", 20));

*/

function totalSandwich(
  tipoSandwich,
  tipoPan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayo,
  mostaza
) {
  precio = 0;
  tipoSandwich == "pollo"
    ? (precio = 150)
    : tipoSandwich == "carne"
      ? (precio = 200)
      : (precio = 100);
  switch (tipoPan){
    case "blanco":
      precio+=50
      break
    case "negro":
      precio +=60
      break
    default:
      precio += 75
      break
  }
/*    
      tipoPan == "blanco"
    ? (precio +=  50)
    : tipoPan == "negro"
      ? (precio +=  60)
      : (precio +=  75);
*/
  queso ? (precio += 20) : precio;
  tomate ? (precio = precio + 15) : precio;
  lechuga ? (precio = precio + 10) : precio;
  cebolla ? (precio = precio + 15) : precio;
  mayo ? (precio = precio + 5) : precio;
  mostaza ? (precio = precio + 5) : precio;
  return precio;
}
console.log(
  "el total es: " +
  totalSandwich("pollo", "blanco", false, true, false, false, false, false)
);


/*¿Cuál es el número secreto?
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.
*/
/*
let numSecreto= Math.round(Math.random()*100)
function Averiguar_numero_secreto(Valor_ingresado) {
  if (Valor_ingresado === numSecreto){
    console.log("Felicitaciones, acertaste")
  }
  else{
    console.log("Vamos a seguir intentando! El número secreto es: "+ numSecreto);
  }
}
Averiguar_numero_secreto(34)
*/
/*
Traductor condicional
Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta.
*/
/*
function Traductor (palabra){
  switch (palabra) {
    case "casa":
      console.log("House");
      break;
    case "perro":
      console.log("Dog");
      break;  
    case "pelota":
      console.log("Ball");
      break;
    case "árbol":
      console.log("Tree");
      break;  
    case "genio":
      console.log("Genius");
      break;  
    default:
      console.log("La palabra introducida es incorrecta");
      break;
  }
}
Traductor("arbol")
*/

/*
Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
inválido".
Cuando el usuario haya valorado la película, agradecerle su visita.
*/
/*
let escala_valoracion = "valorcualquiera"
function Peliculas(valoración) {
  switch (valoración) {
    case "Muy mala":
      console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
      break;
     case "Mala":
      console.log("Calificaste la película como Mala. Lo lamentamos mucho.");
      break;
    case "Mediocre":
      console.log("Calificaste la película como mediocre. Trataremos de mejorar.");
      break;
    case "Buena":
      console.log("Calificaste la película como Buena!. Esperamos seguirte ofreciendo buen cine.");
      break;
    case "Muy buena":
      console.log("Calificaste la película como Muy Buena. Nos encanta!!!");
      break;
 
    default:
      console.log("Ingresaste un valor inválido");
      break;
  }
}

Peliculas(escala_valoracion)
*/