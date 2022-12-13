public class Main {
    public static void main(String[] args) {

        Tren tren_de_la_costa = new Tren();
        tren_de_la_costa.agregarFigura(FiguraFactory.LOCOMOTORA);
        tren_de_la_costa.agregarFigura(FiguraFactory.VAGON);
        tren_de_la_costa.calcularAreaTotal();
    }
}