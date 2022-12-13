import java.util.List;

public class Main {
    public static void main(String[] args) {
        Empresa empresa = new Empresa("La Ribera");
        empresa.agregarDepartamento("Operaciones");
        empresa.agregarDepartamento("Recursos humanos");
        empresa.agregarEmpleado(EmpleadoFactory.EMP_PH,"Esteban","Barreto", 5248);
        empresa.agregarEmpleado(EmpleadoFactory.EMP_PH,"Alejo","Mariani",74822);
        empresa.agregarEmpleado(EmpleadoFactory.EMP_RD,"Mariela", "Giani",12555);
        List<Departamento> dep1 = empresa.getDepartamentoList();

    }
}
