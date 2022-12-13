import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private String nombre;
    private List<ListaReservas> listaReservasList;

    public Empresa(String nombre) {
        this.nombre = nombre;
        listaReservasList= new ArrayList<>();
    }

    public double recaudacionTotal(){
        double recaudacion = 0.0;
        for (ListaReservas listaReservas : listaReservasList) {
            recaudacion += listaReservas.precioReserva();
        }
        return recaudacion;
    }

    public int cantVecesRecorrida(String estacion) throws EstacionException{
        int cantPersonas = 0;
        if ()
        return cantPersonas;
    }
    private List retornarListaEstaciones(){
        List listaEstaciones = new ArrayList<>();
        for (Object listaEstacione : listaEstaciones) {

        }
        return listaEstaciones;
    }
}
