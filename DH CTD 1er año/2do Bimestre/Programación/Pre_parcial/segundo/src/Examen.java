public abstract class Examen {
    private String titulo;
    private String enunciado;
    private double nota;

    public Examen(String titulo, String enunciado, double nota) {
        this.titulo = titulo;
        this.enunciado = enunciado;
        this.nota = nota;
    }
    public Boolean aprobado(){
        return nota >= 4;
    }

    public double getNota() {
        return nota;
    }
}
