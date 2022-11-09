public class Cuenta {
    private String numero;
    protected double Saldo;

    public Cuenta(String numero, double saldo) {
        this.numero = numero;
        Saldo = saldo;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public double getSaldo() {
        return Saldo;
    }

    public void setSaldo(double saldo) {
        Saldo = saldo;
    }
}
