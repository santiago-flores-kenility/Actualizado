public class Main {
    public static void main(String[] args) {
        Semaforo sm = new Semaforo();
        System.out.println(sm.mostrarAviso());
        sm.cambiarEstado();
        System.out.println(sm.mostrarAviso());
        sm.cambiarEstado();
        System.out.println(sm.mostrarAviso());
        sm.cambiarEstado();
        System.out.println(sm.mostrarAviso());



    }
}