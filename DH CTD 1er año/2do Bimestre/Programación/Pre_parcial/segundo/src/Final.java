public class Final extends Examen implements Comparable{
    private double notaOral;
    private String descripcion;

    public Final(String titulo, String enunciado, double nota, Alumno alumno, double notaOral, String descripcion) {
        super(titulo, enunciado, nota, alumno);
        this.notaOral = notaOral;
        this.descripcion = descripcion;
    }

    @Override
    public int compareTo(Object o) {
        Final temp = (Final)o;
        if (((notaOral + getNota()) / 2) > ((temp.notaOral + temp.getNota()) / 2)) return 1;
        if ((notaOral+getNota())/2 < (temp.notaOral+ temp.getNota())/2) return -1;
        return 0;
    }
}
