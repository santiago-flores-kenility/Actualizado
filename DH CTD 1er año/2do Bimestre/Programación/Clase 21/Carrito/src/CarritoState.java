public interface CarritoState {
    public CarritoState recibirProducto(Producto producto);
    public CarritoState cancelarCarrito();
    public CarritoState volverEstado();
    public CarritoState pasarAlSiguienteEstado();

}
