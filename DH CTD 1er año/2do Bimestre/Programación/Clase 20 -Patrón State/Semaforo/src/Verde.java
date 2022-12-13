public class Verde implements EstadoSemaforo{
    private Semaforo s;

    public Verde(Semaforo s) {
        this.s = s;
    }

    @Override
    public void cambiarEstado() {
        s.setEstado(new Amarillo(s));
    }
}
