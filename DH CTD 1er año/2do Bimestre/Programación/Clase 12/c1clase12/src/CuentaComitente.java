public class CuentaComitente extends Cuenta {
    private String claveDeValidacion;

    public CuentaComitente(Cliente titular, Double saldo, String claveDeValidacion) {
        super(titular, saldo);
        this.claveDeValidacion = claveDeValidacion;
    }

    @Override
    public void depositar(Double monto) {
        System.out.println("Deposito: " + monto);
        super.depositar(monto * 0.99);
    }

    @Override
    public void retirar(Double monto) {
        if (monto <= getSaldo()) {
            if (claveDeValidacion.equals("clave")) {
                setSaldo(getSaldo() - monto);
                informarSaldo();
            } else {
                setSaldo(getSaldo() - monto / 2);
                informarSaldo();
            }
        } else {
            System.out.println("no podes retirar esa cantidad");
        }
    }
}
