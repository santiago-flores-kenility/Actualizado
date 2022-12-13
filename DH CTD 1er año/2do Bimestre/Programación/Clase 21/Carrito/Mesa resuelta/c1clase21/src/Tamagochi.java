public class Tamagochi {

    private TamagochiState tamagochiState;

    public Tamagochi() {
        tamagochiState = new StateFeliz();
    }

    public void darComida(){
        tamagochiState = tamagochiState.recibirComida();
    }

    public void darBebida(){
        tamagochiState = tamagochiState.recibirBebida();
    }

    public void darMimos(){
        tamagochiState = tamagochiState.recibirMimos();
    }
}
