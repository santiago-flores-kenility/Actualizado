public abstract class Examen {
    private String titulo;
    private String enunciado;
    private double nota;

    private Alumno alumno;

    public Examen(String titulo, String enunciado, double nota, Alumno alumno) {
        this.titulo = titulo;
        this.enunciado = enunciado;
        this.nota = nota;
        this.alumno = alumno;
    }

    public Boolean aprobado(){
        return nota >= 4;
    }

    public double getNota() {
        return nota;
    }
}
