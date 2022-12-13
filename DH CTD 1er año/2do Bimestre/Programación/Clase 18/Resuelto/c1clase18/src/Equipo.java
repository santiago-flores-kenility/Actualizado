import java.util.ArrayList;
import java.util.List;

public class Equipo {

    private String pais;
    private List<Jugador> jugadorList;

    public Equipo(String pais) {
        this.pais = pais;
        jugadorList = new ArrayList<>();
    }

    public void agregarJugador(Jugador jugador){
        jugadorList.add(jugador);

    }

    public Jugador buscarJugador(Integer numeroJugador) throws EquipoException{
        Jugador jugadorEncontrado = null;
        for (Jugador jugador : jugadorList) {
            if(jugador.getNumeroCamiseta().equals(numeroJugador)){
             jugadorEncontrado = jugador;
             break;
            }
        }
        if(jugadorEncontrado == null){
            throw new EquipoException("el numero " + numeroJugador + " no es parte de el equipo");
        }
        return jugadorEncontrado;
    }

    public Integer cantidadJugadores(String posicion) throws EquipoException {


        if(!posicionesValidas().contains(posicion)){
            throw new EquipoException("la posicion " + posicion + " no es una posicion valida" );
        }


        Integer cantidadJugadores = 0;
        for (Jugador jugador : jugadorList) {
            if(jugador.getPosicion().equals(posicion)){
                cantidadJugadores++;
            }
        }



        return cantidadJugadores;
    }

    private List<String> posicionesValidas(){
        List<String> posicionesValidas = new ArrayList<>();
        posicionesValidas.add("ARQUERO");
        posicionesValidas.add("DEFENSOR");
        posicionesValidas.add("MEDIO");
        posicionesValidas.add("DELANTERO");
        return posicionesValidas;
    }
}
