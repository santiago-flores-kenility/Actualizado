public class Main {
    public static void main(String[] args) {
        Contenedor contenedor1 = new Contenedor(256,"San Juan",false);
        Contenedor contenedor2 = new Contenedor(156,"Desconocida",true);
        Contenedor contenedor3 = new Contenedor(356,"San Juan",false);
        Contenedor contenedor4 = new Contenedor(456,"Jujuy",true);

        Puerto puerto = new Puerto("Buenos Aires");
        puerto.agregarContenedor(contenedor1);
        puerto.agregarContenedor(contenedor2);
        puerto.agregarContenedor(contenedor3);
        puerto.agregarContenedor(contenedor4);

        puerto.mostrarContenedores();
        System.out.println(puerto.mostrarContenedoresPeligrosos());

    }
}