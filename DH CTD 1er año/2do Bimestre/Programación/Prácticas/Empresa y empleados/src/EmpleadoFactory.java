public class EmpleadoFactory {
    public static final String EMP_RD = "EMP-RD";
    public static final String EMP_PH = "EMP-PH";

    private static EmpleadoFactory instance;

    private EmpleadoFactory() {
    }

    public static EmpleadoFactory getInstance() {
        if (instance == null) {
            instance = new EmpleadoFactory();
        }
        return instance;
    }

    public Empleado generarEmpleado(String codigo, String nombre, String apellido, int legajo) throws EmpleadoFactoryException{
        switch (codigo){
            case EMP_RD:
                return new EmpleadoRelacionDependencia(nombre,apellido,legajo);
            case EMP_PH:
                return new EmpleadoContratado(nombre,apellido,legajo);
        }
        throw new EmpleadoFactoryException(codigo + " no es un código correcto...");
    }
}
