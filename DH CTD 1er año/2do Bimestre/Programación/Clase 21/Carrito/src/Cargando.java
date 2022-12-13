public class Cargando implements CarritoState{
    private Carrito carrito;
    @Override
    public CarritoState recibirProducto(Producto producto) {
        carrito.cargarProductoEnLista(producto);
        return this;
    }

    @Override
    public CarritoState volverEstado() {
        carrito.borrarCarga();
        return new Vacio();
    }

    @Override
    public CarritoState pasarAlSiguienteEstado() {
        return new Pagando();
    }
    @Override
    public CarritoState cancelarCarrito() {
        carrito.borrarCarga();
        return new Vacio();
    }
}
