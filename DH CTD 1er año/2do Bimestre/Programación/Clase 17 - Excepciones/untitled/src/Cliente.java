public class Cliente  {
    private String nombre;
    private String apellido;
    private String DNI;
    private double saldoEnCuenta;
    private double limite;
    private Double deuda;

    public Cliente(String nombre, String apellido, String DNI, double limite) throws ClienteException {
        this.nombre = nombre;
        this.apellido = apellido;
        this.DNI = DNI;
        this.limite = limite;
        saldoEnCuenta=0;
        deuda=0.0;
    }

    public void comprar(double importe ) throws ClienteException{
        if (importe + saldoEnCuenta > limite)
            throw new ClienteException("El importe supera su limite establecido");
        saldoEnCuenta += importe;
    }


    public void saldarDeuda(double importe) throws ClienteException{
        if(deuda==0)
            throw new ClienteException("No tenés deuda a saldar");
        deuda -= importe;
    }

    public double getSaldoEnCuenta() {
        return saldoEnCuenta;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", DNI='" + DNI + '\'' +
                ", saldoEnCuenta=" + saldoEnCuenta +
                ", limite=" + limite +
                ", deuda=" + deuda +
                '}';
    }
}
