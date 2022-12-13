import java.util.ArrayList;
import java.util.List;

public class Empresa {

    private String razonSocial;
    private List<Empleado> empleadoList;

    public Empresa(String razonSocial) {
        this.razonSocial = razonSocial;
        empleadoList = new ArrayList<>();
    }

    public void agregarEmpleado(String codigo){
        try {
            empleadoList.add(EmpleadoFactory.getInstance().crearEmpleado(codigo));
        } catch (EmpleadoException e){
            e.printStackTrace();
        }
    }

    public Double calcularSueldosTotales(Integer diasTrabajados){
        Double sueldosTotales = 0.0;
        for (Empleado empleado : empleadoList) {
            sueldosTotales += empleado.calcularSueldo(diasTrabajados);
        }
        return sueldosTotales;

    }



}
