public class FiguraFactory {
    public static final String TRIANGULO = "TRIANGULO";
    public static final String RECTANGULO_VAGON = "RECTANGULO_VAGON";
    public static final String RECTANGULO_LOCOMOTORA = "RECTANGULO_LOCOMOTORA";
    public static final String CIRCULO = "CIRCULO";
    public static final String VAGON = "VAGON";
    public static final String LOCOMOTORA = "LOCOMOTORA";
    private static FiguraFactory instancia;
    private FiguraFactory(){};
    public static FiguraFactory getInstancia(){
        if (instancia == null) {
            instancia = new FiguraFactory();
        }
        return instancia;
    }
    public Figura generarFigura(String codigo) throws FiguraFactoryException{
        switch (codigo){
            case TRIANGULO:
                return new Triangulo(2.0,2.0);
            case RECTANGULO_VAGON:
                return new Rectangulo(5.0,4.0);
            case RECTANGULO_LOCOMOTORA:
                return new Rectangulo(6.0,4.0);
            case CIRCULO:
                return new Circulo(1.0);
            case VAGON:
                Compuesto vagon= new Compuesto("Vagon1");
                vagon.agregarFigura(this.generarFigura(RECTANGULO_VAGON));
                vagon.agregarFigura(this.generarFigura(CIRCULO));
                vagon.agregarFigura(this.generarFigura(CIRCULO));
                vagon.agregarFigura(this.generarFigura(CIRCULO));
                return vagon;
            case LOCOMOTORA:
                Compuesto locomotora = new Compuesto("LC V57");
                locomotora.agregarFigura(this.generarFigura(RECTANGULO_LOCOMOTORA));
                locomotora.agregarFigura(this.generarFigura(CIRCULO));
                locomotora.agregarFigura(this.generarFigura(CIRCULO));
                locomotora.agregarFigura(this.generarFigura(TRIANGULO));
                return locomotora;
        }
        throw new FiguraFactoryException(codigo + " no es un código válido");
    }

}
