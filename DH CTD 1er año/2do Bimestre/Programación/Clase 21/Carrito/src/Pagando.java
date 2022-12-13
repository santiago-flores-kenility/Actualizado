public class Pagando implements CarritoState{
    private Carrito carrito;
    @Override
    public CarritoState recibirProducto(Producto producto) {
        return this;
    }

    @Override
    public CarritoState volverEstado() {
        return new Cargando();
    }

    @Override
    public CarritoState pasarAlSiguienteEstado() {
        return new Cerrado();
    }
    @Override
    public CarritoState cancelarCarrito() {
        carrito.borrarCarga();
        return new Vacio();
    }
}
