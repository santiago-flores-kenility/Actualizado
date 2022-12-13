import java.util.ArrayList;
import java.util.List;

public class ProgramaIntensivo extends OfertaAcademica {
private double bonificacion;
private List<Curso> cursoList;

    public ProgramaIntensivo(String nombre, String descripcion, double bonificacion) {
        super(nombre, descripcion);
        this.bonificacion = bonificacion;
        this.cursoList = new ArrayList<>();
    }

    public void agregarCurso(Curso curso){
        cursoList.add(curso);
    }

    @Override
    public double calcularPrecio() {
        double sumaCursos = 0.0;
        for (Curso curso : cursoList) {
            sumaCursos += curso.calcularPrecio();
        }
        return sumaCursos * (100 - bonificacion)/100 ;
    }

    @Override
    public String generarInforme() {
        return "Nombre programa: "+ super.getNombre()+" precio: $"+ calcularPrecio();
    }
}
