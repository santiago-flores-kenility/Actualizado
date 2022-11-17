public class Main {
    public static void main(String[] args) {


        Cliente cliente = new Cliente(1,"Perez","123");

        Cuenta cuentaComitente = new CuentaComitente(cliente,0.0,"clave");
        Cuenta cuentaComitente1 = new CuentaComitente(cliente,1000.0,"");
        Cuenta cuentaCorriente = new CuentaCorriente(cliente,1000.0,2000.0);

        cuentaComitente.depositar(10000.0);
        cuentaComitente1.retirar(1700.0);
        cuentaCorriente.depositar(1010.0);
    }
}