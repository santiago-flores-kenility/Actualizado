import java.util.ArrayList;
import java.util.List;

public class Departamento {
    private String nombreArea;
    private List<Empleado>empleadoAreaList;

    public Departamento(String nombreArea) {
        this.nombreArea = nombreArea;
        this.empleadoAreaList=new ArrayList<>();
    }

    public void agregarEmpleadoAlArea(Empleado empleado){
        empleadoAreaList.add(empleado);
    }

    public double calcularSueldoArea(int dias) {
        double sumador = 0.0;
        for (Empleado empleadoArea : empleadoAreaList) {
            sumador +=empleadoArea.calcularSueldo(dias);
        }
        return sumador;
    }


}
