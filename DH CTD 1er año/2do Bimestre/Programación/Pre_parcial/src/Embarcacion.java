public abstract class Embarcacion {
    private Capitan capitan;
    private double precioBase;
    private double valorAdicional;
    private  Integer anioFabricacion;
    private Double eslora;

    public Embarcacion(Capitan capitan, double precioBase, double valorAdicional, Integer anioFabricacion, Double eslora) {
        this.capitan = capitan;
        this.precioBase = precioBase;
        this.valorAdicional = valorAdicional;
        this.anioFabricacion = anioFabricacion;
        this.eslora = eslora;
    }

    public Double calcularAlquiler(){
        if(anioFabricacion> 2020){
            return precioBase * valorAdicional;
        }
        return precioBase;
    }

    public Double getEslora() {
        return eslora;
    }
}
