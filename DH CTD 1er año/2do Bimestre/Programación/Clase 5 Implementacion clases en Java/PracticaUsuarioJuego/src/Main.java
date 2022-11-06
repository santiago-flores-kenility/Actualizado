public class Main {
    public static void main(String[] args) {
        UsuarioJuego nuevoUsuario = new UsuarioJuego("Jonás","1234", (double) 0,0);
        System.out.println("el nombre es "+nuevoUsuario.getNombre());
        System.out.println("inicia con "+nuevoUsuario.getPuntaje()+" puntos");
        nuevoUsuario.aumentarPuntaje();
        System.out.println(nuevoUsuario.getPuntaje());
        nuevoUsuario.aumentarNivel();
        System.out.println("inicia con "+nuevoUsuario.getNivel()+" nivel");
        nuevoUsuario.bonus(3);
        System.out.println(nuevoUsuario.getPuntaje());
    }
}