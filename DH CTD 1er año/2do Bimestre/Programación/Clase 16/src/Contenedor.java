public class Contenedor implements Comparable<Contenedor>{
    private int numero;
    private String procedencia;
    private boolean peligroso;

    public Contenedor(int numero, String procedencia, boolean peligroso) {
        this.numero = numero;
        this.procedencia = procedencia;
        this.peligroso = peligroso;
    }

    @Override
    public int compareTo(Contenedor otroContenedor) {
        if(this.numero > otroContenedor.numero){
            return 1;
        }
        if(this.numero < otroContenedor.numero){
            return -1;
        }
        return 0;
    }

    public int getNumero() {
        return numero;
    }

    public String getProcedencia() {
        return procedencia;
    }

    public boolean isPeligroso() {
        return peligroso;
    }

    @Override
    public String toString() {
        return "Contenedor{" +
                "numero=" + numero +
                '}';
    }
}
