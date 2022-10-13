//la lista de clientes.
let banco={
    clientes: [
        {
          nroCuenta: 5486273622,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 27771,
          titularCuenta: "Abigael Natte",
        },
        {
          nroCuenta: 1183971869,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 8675,
          titularCuenta: "Ramon Connell",
        },
        {
          nroCuenta: 9582019689,
          tipoDeCuenta: "Caja de Ahorro",
          saldoEnPesos: 27363,
          titularCuenta: "Jarret Lafuente",
        },
        {
          nroCuenta: 1761924656,
          tipoDeCuenta: "Cuenta Corriente",
          saldoEnPesos: 32415,
          titularCuenta: "Ansel Ardley",
        },
        {
          nroCuenta: 7401971607,
          tipoDeCuenta: "Cuenta Unica",
          saldoEnPesos: 18789,
          titularCuenta: "Jacki Shurmer",
        },
      ],
    consultarCliente: function(nombre){
        for (i =0; 1 < this.clientes.length; i++){
            if (this.clientes[i].titularCuenta===nombre){
                return this.clientes[i]
            }
        }
    }
}
//console.log(banco.consultarCliente("Ramon Connell"));

/*Crear una función llamada propiedadUnica que reciba un arreglo de objetos como
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo como
parámetro la propiedad que fue pasada como string.
Ejemplo:
let array = [ { nombre: “Lean”, edad: 27 }, { nombre: “Eze”, edad: 49} ]
propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]
propiedadUnica(array, “nombre”) debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ]
*/
let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]
function propiedadUnica(arreglo, palabra) {
  let devolucion=[];
  let objeto ={}
  for (i = 0; i < arreglo.length; i++){
    objeto[palabra] = arreglo[i][palabra]
    devolucion.push(objeto)
    objeto={}
  }
  return devolucion
}
console.log(propiedadUnica(array, "nombre"))
