import java.util.ArrayList;
import java.util.List;

public class Tren {

    private List<Figura> figurasList;

    public Tren() {
        this.figurasList = new ArrayList<>();
    }

    public void agregarFigura(String codigo){
        try{
            figurasList.add(FiguraFactory.getInstancia().generarFigura(codigo));
        }
        catch (FiguraFactoryException ex){
            System.out.println(ex.getMessage());
        }
    }
    public void calcularAreaTotal(){
        double areaTotal = 0.0;
        for (Figura figura : figurasList) {
            areaTotal += figura.calcularArea();
        }
        System.out.println(areaTotal);
    }
    
}
