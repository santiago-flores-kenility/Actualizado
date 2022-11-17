public class Yate extends Embarcacion implements Comparable {
    private Integer cantidadCamarotes;

    public Yate(Capitan capitan, double precioBase, double valorAdicional, Integer anioFabricacion, Double eslora, Integer cantidadCamarotes) {
        super(capitan, precioBase, valorAdicional, anioFabricacion, eslora);
        this.cantidadCamarotes = cantidadCamarotes;
    }

    @Override
    public int compareTo(Object o) {
        Yate comp = (Yate) o;
        if (this.cantidadCamarotes < comp.cantidadCamarotes) return 1;
        else if (this.cantidadCamarotes > comp.cantidadCamarotes) return -1;
        else return 0;
    }
}
