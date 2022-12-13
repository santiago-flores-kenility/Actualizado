public class Main {
    public static void main(String[] args) throws ClienteException {

        Cliente cliente = new Cliente("Mario", "SOfida", "2515362", 150);
        System.out.println(cliente);
        try {
            cliente.comprar(250.0);
            System.out.println("Saldo en cuenta: -" + cliente.getSaldoEnCuenta());
        } catch (ClienteException excepcion) {
            System.err.println(excepcion.getMessage());
        }


    }
}