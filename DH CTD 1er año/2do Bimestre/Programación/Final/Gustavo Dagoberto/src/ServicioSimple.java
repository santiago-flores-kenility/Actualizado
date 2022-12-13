public class ServicioSimple extends Servicio{
    private double precioBase;
    private boolean colocacion;

    public ServicioSimple(String nombre, String descripcion, double precioBase, boolean colocacion) {
        super(nombre, descripcion);
        this.precioBase = precioBase;
        this.colocacion = colocacion;
    }

    @Override
    public double calcularPrecio() {
        if (colocacion) return precioBase * 1.1;
        return precioBase;
    }
}
