public class Main {
    public static void main(String[] args) {

        Almacen almacen = new Almacen();

        ProductoFactory productoFactory = ProductoFactory.getInstance();

        almacen.agregarProducto(ProductoFactory.CODIGO_CAJA);
        almacen.agregarProducto(ProductoFactory.CODIGO_CAJA);
        almacen.agregarProducto(ProductoFactory.CODIGO_CAJA);
        almacen.agregarProducto("cualca");
        almacen.agregarProducto(ProductoFactory.CODIGO_PELOTA_TENNIS);
        almacen.agregarProducto(ProductoFactory.CODIGO_PELOTA_FUTBOL);




        System.out.println(almacen.calcularEspacio());

    }
}