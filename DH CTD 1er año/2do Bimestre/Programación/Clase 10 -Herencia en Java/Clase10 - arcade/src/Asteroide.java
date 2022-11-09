import java.util.Objects;

public class Asteroide extends ObjetoGrafico{
    private int lesion;

    public Asteroide(int posx, int posy, char direccion, int lesion) {
        super(posx, posy, direccion);
        this.lesion = lesion;
    }

    public int getLesion() {
        return lesion;
    }

    public void setLesion(int lesion) {
        this.lesion = lesion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Asteroide asteroide)) return false;
        if (!super.equals(o)) return false;
        return lesion == asteroide.lesion;
    }

    @Override
    public String toString() {
        return "Asteroide{posx=" + super.getPosx() +
        ", posy=" + super.getPosy()+
                ", direccion=" + super.getDireccion() +
                ", lesion=" + lesion +
                "} ";
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), lesion);
    }
}
