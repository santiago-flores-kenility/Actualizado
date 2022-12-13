public class Amarillo implements EstadoSemaforo{
    private Semaforo s;

    public Amarillo(Semaforo s) {
        this.s = s;
    }

    @Override
    public void cambiarEstado() {
        s.setEstado(new Rojo(s));
    }
}
