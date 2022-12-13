public class Rojo implements EstadoSemaforo{
    private Semaforo s;

    public Rojo(Semaforo s) {
        this.s = s;
    }

    @Override
    public void cambiarEstado() {
        s.setEstado(new Verde(s));
    }
}
