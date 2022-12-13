public class Main {
    public static void main(String[] args) {


        Equipo equipo = new Equipo("Japon");

        equipo.agregarJugador(new Jugador(10,"Atom","DELANTERO"));
        equipo.agregarJugador(new Jugador(1,"Price","ARQUERO"));
        equipo.agregarJugador(new Jugador(5,"Nitoka","MEDIO"));
        equipo.agregarJugador(new Jugador(2,"Kenji","DEFENSOR"));
        equipo.agregarJugador(new Jugador(9,"Susanoo","DELANTERO"));
        equipo.agregarJugador(new Jugador(8,"Kyubi","DELANTERO"));

        try {
            equipo.buscarJugador(22).patearPelota();
        } catch (EquipoException e) {
            e.printStackTrace();
        }

        try {
            System.out.println(equipo.cantidadJugadores("MEDIO"));
        } catch (EquipoException e) {
            e.printStackTrace();
        }


    }
}