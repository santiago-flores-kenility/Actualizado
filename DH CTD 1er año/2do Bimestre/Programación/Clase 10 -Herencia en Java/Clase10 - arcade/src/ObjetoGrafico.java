import java.util.Objects;

public class ObjetoGrafico {
    private int posx;
    private int posy;
    private char direccion;

    public ObjetoGrafico(int posx, int posy, char direccion) {
        this.posx = posx;
        this.posy = posy;
        this.direccion = direccion;
    }
    public void irA(int x, int y, char direccion){
        posx=x;
        posy=y;
        this.direccion=direccion;
        System.out.println("la nave se dirige a: x: "+ x + " y: " + y+ " en direccion al " + direccion);
    }

    public char getDireccion() {
        return direccion;
    }

    public void cambiarDireccion(char direccion) {
        this.direccion = direccion;
    }

    public int getPosx() {
        return posx;
    }

    public void setPosx(int posx) {
        this.posx = posx;
    }

    public int getPosy() {
        return posy;
    }

    public void setPosy(int posy) {
        this.posy = posy;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ObjetoGrafico that)) return false;
        return posx == that.posx && posy == that.posy && direccion == that.direccion;
    }

    @Override
    public String toString() {
        return "ObjetoGrafico{" +
                "posx=" + posx +
                ", posy=" + posy +
                ", direccion=" + direccion +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(posx, posy, direccion);
    }
}
