public class Semaforo {
    private EstadoSemaforo estado; //estado actual del semáforo

    public Semaforo() {
        this.setEstado(new Verde(this));
    }

    public void setEstado(EstadoSemaforo estado) {
        this.estado = estado;
    }
    public EstadoSemaforo mostrarAviso(){
        return estado;
    }

    public void cambiarEstado(){
         estado.cambiarEstado();
    }

}
