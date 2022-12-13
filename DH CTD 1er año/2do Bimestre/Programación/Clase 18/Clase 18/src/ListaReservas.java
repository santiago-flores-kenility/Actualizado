import java.util.List;

public class ListaReservas {
    private int codigo;
    private int cantidadPersonas;
    private Estacion estacionPartida;
    private Estacion estacionLlegada;

    public ListaReservas(int codigo, int cantidadPersonas, Estacion estacionPartida, Estacion estacionLlegada) {
        this.codigo = codigo;
        this.cantidadPersonas = cantidadPersonas;
        this.estacionPartida = estacionPartida;
        this.estacionLlegada = estacionLlegada;
    }

    public double precioReserva(){
        boolean conDescuento = false;
        if ((estacionPartida.equals("Buenos Aires") || estacionPartida.equals("Bragado"))
        && (estacionLlegada.equals("Buenos Aires") || estacionLlegada.equals("Bragado"))){
            conDescuento= true;
        }

        return (conDescuento)?cantidadPersonas*(50*0.8):cantidadPersonas*50;
    }






}