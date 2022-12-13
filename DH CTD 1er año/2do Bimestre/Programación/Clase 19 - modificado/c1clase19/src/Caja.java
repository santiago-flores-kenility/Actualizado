public class Caja extends Producto{

    private Double largo;
    private Double ancho;
    private Double altura;

    public Caja(Double peso, Double largo, Double ancho, Double altura) {
        super(peso);
        this.largo = largo;
        this.ancho = ancho;
        this.altura = altura;
    }

    @Override
    public Double calcularEspacio() {
        return ancho * largo * altura;
    }
}
