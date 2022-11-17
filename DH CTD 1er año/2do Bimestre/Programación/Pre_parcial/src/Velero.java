public class Velero extends Embarcacion{
    private Integer cantidadMastiles;

    public Velero(Capitan capitan, double precioBase, double valorAdicional, Integer anioFabricacion, Double eslora, Integer cantidadMastiles) {
        super(capitan, precioBase, valorAdicional, anioFabricacion, eslora);
        this.cantidadMastiles = cantidadMastiles;
    }
    public  Boolean esGrande(){
        return cantidadMastiles > 4 && getEslora() > 10;
    }
}
