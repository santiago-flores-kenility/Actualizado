public class Main {
    public static void main(String[] args) {
        Curso frontEnd = new Curso("Front End I","Curso de Front End I",16,1000.0,2.0);
        Curso backEnd = new Curso("Back End I", "Curso de Back End I",20,900.0,2.0);
        ProgramaIntensivo fullStack = new ProgramaIntensivo("Full Stack", "Full Stack I",20.0);
        fullStack.agregarCurso(frontEnd);
        fullStack.agregarCurso(backEnd);
        Instituto instituto = new Instituto("Digital House");

        instituto.agregarOfertaAcademica(fullStack);
        instituto.agregarOfertaAcademica(frontEnd);
        instituto.agregarOfertaAcademica(backEnd);

        System.out.println(instituto.generarInformeCompleto());

    }
}