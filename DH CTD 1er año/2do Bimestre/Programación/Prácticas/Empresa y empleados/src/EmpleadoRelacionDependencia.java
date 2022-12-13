public class EmpleadoRelacionDependencia extends Empleado{
    private double sueldoMensual;

    public EmpleadoRelacionDependencia(String nombre, String apellido, int legajo) {
        super(nombre, apellido, legajo);
        this.sueldoMensual = 1000.0;
    }

    @Override
    public double calcularSueldo(int dias) {
        return sueldoMensual/30*dias;
    }
}
