public abstract class Servicio {
    private String nombre;
    private String descripcion;

    public Servicio(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    public abstract double calcularPrecio();

    @Override
    public String toString() {
        return "nombre : " + nombre + " precio " + calcularPrecio();
    }

}
