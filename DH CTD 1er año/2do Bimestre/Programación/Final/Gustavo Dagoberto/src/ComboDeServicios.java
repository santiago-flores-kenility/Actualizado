import java.util.ArrayList;
import java.util.List;

public class ComboDeServicios extends Servicio{
    private int descuento;
    private List<Servicio>servicioList;

    public ComboDeServicios(String nombre, String descripcion, int descuento) {
        super(nombre, descripcion);
        this.descuento = descuento;
        this.servicioList=new ArrayList<>();
    }

    @Override
    public double calcularPrecio() {
        double sumador=0.0;
        double porcentajeDescuento = (100 - descuento)/100.0;
        for (Servicio servicio : servicioList) {
            sumador += servicio.calcularPrecio();
        }
        return sumador * porcentajeDescuento;
    }

    public void agregarServicio(Servicio servicio){
        servicioList.add(servicio);
    }
}
