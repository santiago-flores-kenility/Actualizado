import java.util.List;

public class ProductoFactory {

    // crear constantes
    public static final String CODIGO_CAJA = "CAJA10X10";
    public static final String CODIGO_PELOTA_FUTBOL = "PELOTAFUTBOL";
    public static final String CODIGO_PELOTA_TENNIS = "PELOTATENNIS";

    //creo una isntancia estatica para garantizar que sea la unica
    private static ProductoFactory instance;

    //creo el constructor privado para que no puedan crear desde afuera de mi clase
    private ProductoFactory(){

    }

    //creo el getter que inicializa la clase cuando se ejecuta por primera vez
    public static ProductoFactory getInstance() {
        if(instance == null){
            instance = new ProductoFactory();
        }
        return instance;
    }

    //el metodo que crea los productos
    public Producto crearProducto(String codigo) throws ProductoFactoryException{
        switch (codigo){
            case CODIGO_CAJA :
                return new Caja(3.0,10.0,10.0,10.0);
            case CODIGO_PELOTA_FUTBOL:
                return new Pelota(5.0,11.0);
            case CODIGO_PELOTA_TENNIS:
                return new Pelota(1.0,0.32);
        }
        throw new ProductoFactoryException(codigo + " no es un codigo valido");
    }

}
