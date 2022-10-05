// 1. Generar un archivo .html con el diseño que gustes. Este deberá tener al
// menos una etiqueta <h1>, dos etiquetas <h2>, y 3 etiquetas <p>.
// Opcionalmente podrán agregarle CSS si así lo desean.
// 2. Generar un archivo .js y vincularlo mediante <script> a nuestro archivo
// HTML.
// 3. Dentro del archivo .js, seleccionar el elemento h1 y cambiar su color.
// 4. Seleccionar el elemento <h2> y modificar su valor por “Bienvenidos a mi
// página web”. Luego de esto, analizar qué ha pasado con el segundo
// <h2> cargado.
// 5. Modificar el contenido de un solo elemento <p> con textContent y luego
// con innerHTML. ¿Funciona igual para ambos casos?
// 6. Por último agregar 3 <p> y cambiarles a todos el contenido


document.querySelector("h1").style.color = "red";


let h2 = document.querySelector("h2");

h2.textContent = "Bienvenidos a mi página web";
let pa = document.querySelector("p")
pa.textContent = "cambio de contenido";
pa.innerHTML = "<p>Hola, bienvenidos!</p>";

let link = document.querySelectorAll("p");

for(let i=0 ; i< link.length ; i++){
    link[i].textContent = "Soy el link " + (i+1);
}







