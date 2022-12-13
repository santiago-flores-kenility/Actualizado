public class Main {
    public static void main(String[] args) {
        Empresa empresa = new Empresa("Una Fresca");
        empresa.agregarServicio(ServicioFactory.VENTA_AIRE_ACONDICIONADO);
        empresa.agregarServicio(ServicioFactory.COLOCACION_AIRE_ACONDICIONADO);
        empresa.agregarServicio(ServicioFactory.FULL_AIRE_ACONDICIONADO);
        empresa.mostrarServicios();

    }
}