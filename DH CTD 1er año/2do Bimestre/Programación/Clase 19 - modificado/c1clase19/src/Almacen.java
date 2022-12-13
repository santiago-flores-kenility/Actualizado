import java.util.ArrayList;
import java.util.List;

public class Almacen {

    private List<Producto> productoList;

    public Almacen() {
        this.productoList = new ArrayList<>();
    }

    public void agregarProducto(String codigo) {
        try {
            productoList.add(ProductoFactory.getInstance().crearProducto(codigo));
        } catch (ProductoFactoryException e) {
            e.printStackTrace();
        }
    }

//    public void agregarProducto(String codigo,Integer cantidad) {
//        for (int i = 0; i < cantidad; i++) {
//            agregarProducto(codigo);
//        }
//    }



    public Double calcularEspacio(){
        Double espacioNecesario = 0.0;
        for (Producto producto : productoList) {
            espacioNecesario += producto.calcularEspacio();
        }
        return espacioNecesario;
    }
}
