public class ServicioFactory {
    public static final String VENTA_AIRE_ACONDICIONADO = "VENTA AIRE ACONDICIONADO";
    public static final String COLOCACION_AIRE_ACONDICIONADO = "COLOCACION AIRE ACONDICIONADO";
    public static final String FULL_AIRE_ACONDICIONADO = "FULL AIRE ACONDICIONADO";
    private static ServicioFactory instance;

    private ServicioFactory(){};

    public static ServicioFactory getInstance() {
        if(instance == null){
            instance = new ServicioFactory();
        }
        return instance;
    }

    public Servicio generarServicio(String codigo) throws ServicioFactoryException{
        switch (codigo){
            case VENTA_AIRE_ACONDICIONADO:
                return new ServicioSimple("Venta aire acondicionado","venta aire split inverter",65000.0,false);
            case COLOCACION_AIRE_ACONDICIONADO:
                return new ServicioSimple("Colocacion aire acondicionado","Colocacion aire acondicionado",10000.0, true);
            case FULL_AIRE_ACONDICIONADO:
                ComboDeServicios fullAireAcondicionado = new ComboDeServicios("Full Aire Acondicionado","dos servicios con 10% descuento", 10);
                fullAireAcondicionado.agregarServicio(this.generarServicio(VENTA_AIRE_ACONDICIONADO));
                fullAireAcondicionado.agregarServicio(this.generarServicio(COLOCACION_AIRE_ACONDICIONADO));
                return fullAireAcondicionado;
        }
        throw new ServicioFactoryException(codigo + " no es un codigo valido");
    }

}
