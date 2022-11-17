public class CuentaCajaDeAhorro extends Cuenta{

    private Double tasaDeinteres;

    public CuentaCajaDeAhorro(Cliente titular, Double saldo, Double tasaDeinteres) {
        super(titular, saldo);
        this.tasaDeinteres = tasaDeinteres;
    }

    public void cobrarInteres(){

        depositar(getSaldo() * tasaDeinteres);
    }
}
