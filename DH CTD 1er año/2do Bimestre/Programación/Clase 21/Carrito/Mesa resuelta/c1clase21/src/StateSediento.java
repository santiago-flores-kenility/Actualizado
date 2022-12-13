public class StateSediento implements TamagochiState {

    @Override
    public TamagochiState recibirComida() {
        return new StateTriste();
    }

    @Override
    public TamagochiState recibirBebida() {
        return new StateFeliz();
    }

    @Override
    public TamagochiState recibirMimos() {
        return this;
    }
}
