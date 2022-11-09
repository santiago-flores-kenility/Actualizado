import java.util.Objects;

public class Nave extends ObjetoGrafico{
    private double velocidad;
    private int vida;

    public Nave(int posx, int posy, char direccion, double velocidad, int vida) {
        super(posx, posy, direccion);
        this.velocidad = velocidad;
        this.vida = vida;
    }

    @Override
    public void irA(int x, int y, char direccion) {
        super.setPosx(x);
        super.setPosy(y);
        if (super.getDireccion() != direccion) {
            girar(direccion);
        }
        System.out.println("la nave ahora se dirige al "+ direccion);
        System.out.println("con coordenadas x: "+ x + ", y: "+y );
    }

    public void girar (char direccion){
        super.cambiarDireccion(direccion);
    }

    public void restaVida(int valor){
        vida -= valor;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Nave nave = (Nave) o;
        return Double.compare(nave.velocidad, velocidad) == 0 && vida == nave.vida;
    }

    @Override
    public String toString() {
        return "Nave{posx=" + super.getPosx() +
                ", posy=" + super.getPosy()+
                ", direccion=" + super.getDireccion() +
                ", velocidad=" + velocidad +
                ", vida=" + vida +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(velocidad, vida);
    }
}
