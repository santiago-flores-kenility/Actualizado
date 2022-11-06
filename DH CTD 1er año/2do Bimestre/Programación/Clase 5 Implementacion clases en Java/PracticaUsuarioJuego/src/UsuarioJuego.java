public class UsuarioJuego {
    private String nombre;
    private String clave;
    private Double puntaje;
    private int nivel;

    public UsuarioJuego(String nombreUsuario, String claveusuario, Double puntajeUsuario, int nivelUsuario) {
        nombre = nombreUsuario;
        clave = claveusuario;
        puntaje = puntajeUsuario;
        nivel = nivelUsuario;
    }

    public void aumentarPuntaje() {
        puntaje += 1;
    }

    public void aumentarNivel() {
        nivel += 1;
    }

    public void bonus(int bonus) {
        puntaje += bonus;
    }

    public Double getPuntaje() {
        return puntaje;
    }

    public String getNombre() {
        return nombre;
    }

    public int getNivel() {
        return nivel;
    }

}
