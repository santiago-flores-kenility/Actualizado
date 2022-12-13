public class Main {
    public static void main(String[] args) {
    Alumno Al1 = new Alumno("Juan","Perez",452);
    Alumno Al2 = new Alumno("Francisco","Díaz",433);

    Parcial primero = new Parcial( "1er parcial","Resolver objetos",3.2,Al1,4,2);
    Final fin = new Final("primerfinal","Resolvé bien todo",6.3,Al2,5.6,"Algo parecido pero no igual");
    Final seg = new Final("Segundo Final","Hacelo mejor que el primero",5.0,Al2,6.4,"tire y pegue");
    boolean aprobado = primero.aprobado();
    boolean mayor = (seg.compareTo(fin)==1);
    boolean recuperable = primero.recuperable();

    }
}