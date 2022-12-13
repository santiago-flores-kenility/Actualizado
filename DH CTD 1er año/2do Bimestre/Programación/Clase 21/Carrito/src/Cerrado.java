public class Cerrado implements CarritoState{
    private Carrito carrito;
    @Override
    public CarritoState recibirProducto(Producto producto) {
        return this;
    }

    @Override
    public CarritoState volverEstado() {
        return this;
    }

    @Override
    public CarritoState pasarAlSiguienteEstado() {
        carrito.borrarCarga();
        return new Vacio();
    }

    @Override
    public CarritoState cancelarCarrito() {
        carrito.borrarCarga();
        return new Vacio();
    }
}
