public abstract class OfertaAcademica implements CalculaPrecio{
    private String nombre;
    private String descripcion;

    public OfertaAcademica(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    public abstract String generarInforme();


    public String getNombre() {
        return nombre;
    }
}
