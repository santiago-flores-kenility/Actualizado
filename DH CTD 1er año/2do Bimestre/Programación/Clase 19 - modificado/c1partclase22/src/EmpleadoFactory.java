public class EmpleadoFactory {

    public static final String CODIGO_EMPLEADO_DEPENDENCIA = "EMP-RD";
    public static final String CODIGO_EMPLEADO_CONTRATADO = "EMP-PH";
    private static EmpleadoFactory instance;

    private EmpleadoFactory(){

    }

    public static EmpleadoFactory getInstance() {
        if(instance == null){
            instance = new EmpleadoFactory();
        }
        return instance;
    }

    public Empleado crearEmpleado(String codigo) throws EmpleadoException{
        switch (codigo){
            case CODIGO_EMPLEADO_DEPENDENCIA :
                return new EmpleadoRelacionDependencia("Juan","Perez",1,1000.0);
            case CODIGO_EMPLEADO_CONTRATADO:
                return new EmpleadoContratado("Maria","Lopez",2,7.0,0.14);
        }
        throw new EmpleadoException(codigo + " no es un codigo valido");
    }
}
