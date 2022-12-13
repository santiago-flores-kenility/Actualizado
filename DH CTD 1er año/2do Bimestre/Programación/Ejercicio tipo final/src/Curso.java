public class Curso extends OfertaAcademica {
    private int cargaHorariaMensual;
    private double valorHora;
    private double duracionMeses;

    public Curso(String nombre, String descripcion, int cargaHorariaMensual, double valorHora, double duracionMeses) {
        super(nombre, descripcion);
        this.cargaHorariaMensual = cargaHorariaMensual;
        this.valorHora = valorHora;
        this.duracionMeses = duracionMeses;
    }

    @Override
    public double calcularPrecio() {
        return cargaHorariaMensual*duracionMeses*valorHora;
    }

    @Override
    public String generarInforme() {
        return "Nombre curso: "+ super.getNombre()+" precio: $"+ calcularPrecio();
    }

}
