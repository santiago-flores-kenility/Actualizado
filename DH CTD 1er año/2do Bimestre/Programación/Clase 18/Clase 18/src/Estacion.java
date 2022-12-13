import java.util.ArrayList;
import java.util.List;

public class Estacion {
    private String nombreEstacion;

    public Estacion(String nombreEstacion) {
        this.nombreEstacion = nombreEstacion;
    }

    public String getNombreEstacion() {
        return nombreEstacion;
    }

    public void estacionesPrevias() {
        new Estacion("Buenos Aires");
        new Estacion("Luján");
        new Estacion("Mercedes");
        new Estacion("Suipacha");
        new Estacion("Chivilcoy");
        new Estacion("Alberdi");
        new Estacion("Bragado");
    }
    
    public List<String> retornarListaEstaciones(){
        List<String> listaEstaciones = new ArrayList<>();

        return listaEstaciones;
    }
}
