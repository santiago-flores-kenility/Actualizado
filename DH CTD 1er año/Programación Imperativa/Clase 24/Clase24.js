// Tenemos un array de personas, las cuales tienen nombre, apellido, edad y estado
// civil.
// El array está ordenado por apellido.
// a) Dado un apellido, mostrar toda la información de la persona.
// b) Dada un estado civil, verificar cuantas personas hay con ese estado civil y
// mostrar el resultado obtenido.

let personas = [
    {
        nombre: "Juan",
        apellido:"Perez",
        edad: 15,
        estado: "soltero"
    },
    {
        nombre:"María",
        apellido:"Solís",
        edad:44,
        estado:"casado"
    },
    {
        nombre:"Esteban",
        apellido:"Quito",
        edad:51,
        estado:"viudo"
    },
    {
        nombre:"José",
        apellido:"Martínez",
        edad:28,
        estado:"casado"
    },
    {
        nombre:"Dana",
        apellido:"Cendales",
        edad:18,
        estado:"soltero"
    },
    {
        nombre:"Marcos",
        apellido:"Zucker",
        edad:31,
        estado:"casado"
    }
]


function bubbleSort(arreglo){

    for(let i=0 ; i< arreglo.length ; i++){

        for(let j=0 ; j<arreglo.length - 1 ; j++){

            if(arreglo[j].apellido > arreglo[j+1].apellido){

                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}

//console.log(bubbleSort(personas));

// a) Dado un apellido, mostrar toda la información de la persona.
// b) Dada un estado civil, verificar cuantas personas hay con ese estado civil y
// mostrar el resultado obtenido.

function info(arreglo, apellido) {
    for(x=0;x<arreglo.length;x++){
        if (arreglo[x].apellido===apellido) {
            return arreglo[x]
        }
    }
    return "No se encontró ese apellido"
}

//console.log(info(bubbleSort(personas),"Cendales"));

// b) Dada un estado civil, verificar cuantas personas hay con ese estado civil y
// mostrar el resultado obtenido.

function contarEstado(arreglo,estado){
    let contEstado=0
    for (let y = 0; y < arreglo.length; y++) {
        if(arreglo[y].estado===estado){
            contEstado++
        }        
    }
    return contEstado
}

console.log(contarEstado(bubbleSort(personas),"casado"));