import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Puerto {

    private String nombre;
    private List<Contenedor> contenedorList;

    public Puerto(String nombre) {
        this.nombre= nombre;
        contenedorList = new ArrayList<>();
    }

    public void mostrarContenedores(){
        contenedorList.sort(null);
        for (Contenedor contenedor : contenedorList) {
            System.out.println(contenedor);
        }
    }

    public int mostrarContenedoresPeligrosos(){
        Integer contenedoresPeligrosos = 0;

        for (Contenedor contenedor : contenedorList) {

                if(contenedor.isPeligroso() && contenedor.getProcedencia()=="Desconocida"){
                    contenedoresPeligrosos++;
                }
        }
        return contenedoresPeligrosos;


    }

    public void agregarContenedor(Contenedor contenedor){
        contenedorList.add(contenedor);
    }

}
