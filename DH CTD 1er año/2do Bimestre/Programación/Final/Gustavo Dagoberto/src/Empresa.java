import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private String razonSocial;
    private List<Servicio> servicioList;

    public Empresa(String razonSocial) {
        this.razonSocial = razonSocial;
        this.servicioList= new ArrayList<>();
    }

    public void agregarServicio(String codigoServicio){
        try {
            servicioList.add(ServicioFactory.getInstance().generarServicio(codigoServicio));
        } catch (ServicioFactoryException e) {
            System.out.println(e.getMessage());
        }
    }

    public void mostrarServicios(){
        for (Servicio servicio : servicioList) {
            System.out.println(servicio);
        }
    }
}
