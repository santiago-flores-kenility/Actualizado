public class StateFeliz implements TamagochiState{
    @Override
    public TamagochiState recibirComida() {
        return new StateSediento();
    }

    @Override
    public TamagochiState recibirBebida() {
        return new StateHambriento();
    }

    @Override
    public TamagochiState recibirMimos() {
        return this;
    }
}
