public class StateTriste implements TamagochiState {

    @Override
    public TamagochiState recibirComida() {
        return this;
    }

    @Override
    public TamagochiState recibirBebida() {
        return this;
    }

    @Override
    public TamagochiState recibirMimos() {
        return new StateFeliz();
    }
}
