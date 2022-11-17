public abstract class Cuenta {

    private Cliente titular;
    private Double saldo;

    public Cuenta(Cliente titular, Double saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public void depositar(Double monto){
        if (monto > 0){
            System.out.println("depositaste un monto de  " + monto);
            saldo += monto;
            informarSaldo();
        }
    }

    public void retirar(Double monto){
        if(monto <= saldo){
            System.out.println("retiraste un monto de  " + monto);
            saldo -= monto;
            informarSaldo();
        }else{
            System.out.println("no podes retirar esa cantidad");
        }
    }

    public void informarSaldo(){
        System.out.println("tu saldo es de: " + saldo);
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }
}
