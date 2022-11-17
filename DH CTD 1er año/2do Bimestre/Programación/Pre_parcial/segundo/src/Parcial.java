public class Parcial extends Examen {
    private int nroDeUnidad;
    private int reintentos;

    public Parcial(String titulo, String enunciado, double nota, int nroDeUnidad, int reintentos) {
        super(titulo, enunciado, nota);
        this.nroDeUnidad = nroDeUnidad;
        this.reintentos = reintentos;
    }

    public boolean recuperable() {
        if (nroDeUnidad <= 3) return reintentos < 3;
        else return reintentos < 2;
    }
}
