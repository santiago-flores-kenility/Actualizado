public class Jugador {

    private Integer numeroCamiseta;
    private String apellido;
    private String posicion;

    public Jugador(Integer numeroCamiseta, String apellido, String posicion) {
        this.numeroCamiseta = numeroCamiseta;
        this.apellido = apellido;
        this.posicion = posicion;
    }

    public Integer getNumeroCamiseta() {
        return numeroCamiseta;
    }

    public String getPosicion() {
        return posicion;
    }

    public void patearPelota(){
        System.out.println("soy " + apellido + " estoy pateando");
    }
}
