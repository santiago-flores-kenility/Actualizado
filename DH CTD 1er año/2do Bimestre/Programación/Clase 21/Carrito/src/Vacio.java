public class Vacio implements CarritoState{
    private Carrito carrito;
    @Override
    public CarritoState recibirProducto(Producto producto) {
        carrito.cargarProductoEnLista(producto);
        return new Cargando();
    }

    @Override
    public CarritoState volverEstado() {
        return this;
    }

    @Override
    public CarritoState pasarAlSiguienteEstado() {
        return this;
    }
    @Override
    public CarritoState cancelarCarrito() {
        carrito.borrarCarga();
        return new Vacio();
    }
}
