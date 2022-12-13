public class StateHambriento implements TamagochiState{



    @Override
    public TamagochiState recibirComida() {
        return new StateFeliz();
    }

    @Override
    public TamagochiState recibirBebida() {
        return new StateTriste();
    }

    @Override
    public TamagochiState recibirMimos() {
        return this;
    }
}
