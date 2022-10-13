//a partir de una capacidad y un recorrido, devolver si se pueden llevar los paquetes
function cancarry(capacidad, trip) {
    let carga = [] //inicializa el sumador de paquetes en las etapas
    for (x = 0; x < trip.length; x++) { //recorre cada una de las filas del array
        for (y = trip[x][1]; y <= trip[x][2]; y++){//en array carga: crea paradas y agrega regalos
            if (carga[y] > 0) {
                carga[y] += trip[x][0] //si está creada la parada, le agrega más regalos
            }
            else {
                carga[y] = trip[x][0] //si no está creada la parada, la crea y le carga regalos
            }
        console.log(x, y, carga[y], trip[x][0]);
        if (carga[y] > capacidad) {//si la carga en esa parada es mayor a la capacidad, retorna false
            return false
        }}
    }
    return true
}
let recorrido = [[1, 2, 4], [2, 3, 8]]
console.log(cancarry(2, recorrido));