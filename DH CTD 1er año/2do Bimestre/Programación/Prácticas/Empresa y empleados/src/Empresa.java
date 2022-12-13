import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private String razonSocial;
    private List<Empleado>empleadoList;
    private List<Departamento>departamentoList;
    public Empresa(String razonSocial) {
        this.razonSocial = razonSocial;
        this.empleadoList= new ArrayList<>();
        this.departamentoList = new ArrayList<>();
    }

    public List<Departamento> getDepartamentoList() {
        return departamentoList;
    }

    public void agregarEmpleado(String codigo, String nombre, String apellido, int legajo){
        try {
            empleadoList.add(EmpleadoFactory.getInstance().generarEmpleado(codigo,nombre,apellido,legajo));
        }
        catch (EmpleadoFactoryException ex){
            System.out.println(ex.getMessage());
        }
    }

    public void agregarDepartamento (String nombre){
        departamentoList.add(new Departamento(nombre));
    }

    public double calcularSueldoTotal(int dias) {
        double sumador = 0.0;
        for (Empleado empleado : empleadoList) {
            sumador +=empleado.calcularSueldo(dias);
        }
        return sumador;
    }
}
