public class EmpleadoContratado extends Empleado{
    public static final double HORAS_DIARIAS=8.0;
    private double importePorHora;
    private double retencionImpuesto;

    public EmpleadoContratado(String nombre, String apellido, int legajo) {
        super(nombre, apellido, legajo);
        this.importePorHora = 7.0;
        this.retencionImpuesto = 14.0;
    }

    @Override
    public double calcularSueldo(int dias) {
        return importePorHora * HORAS_DIARIAS * dias * (100.0-retencionImpuesto)/100;
    }
}
