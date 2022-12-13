import java.util.ArrayList;
import java.util.List;

public class Instituto {
    private String nombre;
    private List<OfertaAcademica> ofertaAcademicaList;

    public Instituto(String nombre) {
        this.nombre = nombre;
        this.ofertaAcademicaList = new ArrayList<>();
    }

    public String generarInformeCompleto(){
        String informe= "";
        for (OfertaAcademica ofertaAcademica : ofertaAcademicaList) {
           informe += ofertaAcademica.generarInforme()+ "\n";
        }
        return informe;
    }

    public void agregarOfertaAcademica(OfertaAcademica ofertaAcademica){
        ofertaAcademicaList.add(ofertaAcademica);
    }
}
