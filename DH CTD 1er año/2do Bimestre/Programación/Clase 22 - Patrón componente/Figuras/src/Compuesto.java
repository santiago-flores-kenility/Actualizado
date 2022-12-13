import java.util.ArrayList;
import java.util.List;

public class Compuesto implements Figura{
    private String nombre;
    private List<Figura> figurasList;

    public Compuesto(String nombre) {
        this.nombre = nombre;
        this.figurasList = new ArrayList<>();
    }

    @Override
    public double calcularArea() {
        Double sumaArea=0.0;
        for (Figura figura:figurasList){
            sumaArea += figura.calcularArea();
        }
        return sumaArea;
    }

    public void agregarFigura(Figura figura){
        figurasList.add(figura);
    }
}
