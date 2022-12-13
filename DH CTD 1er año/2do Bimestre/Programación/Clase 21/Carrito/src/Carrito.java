import java.util.ArrayList;
import java.util.List;

public class Carrito {
    private CarritoState carritoState;
    private List<Producto> productoList;

    public Carrito() {
        carritoState = new Vacio();
        productoList= new ArrayList<>();
    }

    public void agregarProducto(Producto producto){
        carritoState = carritoState.recibirProducto(producto);
    }

    public void cargarProductoEnLista(Producto producto){
        productoList.add(producto);
    }

    public void borrarCarga(){
        productoList = new ArrayList<>();
    }

    public void cancelar(){
        carritoState = carritoState.cancelarCarrito();
    }

    public void volverAlEstadoAnterior(){
        carritoState = carritoState.volverEstado();
    }

    public void pasarEstadoSiguiente(){
        carritoState = carritoState.pasarAlSiguienteEstado();
    }
}
