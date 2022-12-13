public class Main {
    public static void main(String[] args) {

        Empresa empresa = new Empresa("Camada 1 S.A");

        EmpleadoFactory empleadoFactory = EmpleadoFactory.getInstance();

        empresa.agregarEmpleado(EmpleadoFactory.CODIGO_EMPLEADO_DEPENDENCIA);
        empresa.agregarEmpleado(EmpleadoFactory.CODIGO_EMPLEADO_CONTRATADO);


        System.out.println(empresa.calcularSueldosTotales(40000));

    }
}