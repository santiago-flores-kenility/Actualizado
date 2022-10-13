// Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:

function matriz10x10() {
    let cont=1
    let matriz =[]
    let matriz1 =[]
    for (i=0;i<10;i++){
        for(j=0;j<10;j++){
            matriz.push(cont)
            cont++
        }
        matriz1.push(matriz)
        matriz =[]
    }
    return matriz1
}
console.table(matriz10x10())