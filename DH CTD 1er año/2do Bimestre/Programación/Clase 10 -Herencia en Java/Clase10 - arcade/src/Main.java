public class Main {
    public static void main(String[] args) {

        Nave nave = new Nave(47,66, 'E',150.0,22);
        System.out.println(nave);
        nave.irA(30,32,'S');
        System.out.println(nave);
        nave.restaVida(13);
        System.out.println(nave);

        Asteroide asteroide = new Asteroide(15,32,'N',45);
        System.out.println(asteroide);
    }
}