public class CuentaCorriente extends Cuenta{

    private Double montoAutorizado;

    public CuentaCorriente(Cliente titular, Double saldo, Double montoAutorizado) {
        super(titular, saldo);
        this.montoAutorizado = montoAutorizado;
    }

    @Override
    public void retirar(Double monto) {
        if(monto <= getSaldo() + montoAutorizado){
            System.out.println("retiraste un monto de  " + monto);
            setSaldo(getSaldo() - monto);
            informarSaldo();
        }else{
            System.out.println("no podes retirar esa cantidad");

        }
    }
}
