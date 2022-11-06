
public class Main {
    public static void main(String[] args) {
        Integer numero = 9;
        System.out.println("Los primeros " + numero + " números primos son: " + listaPrimos(numero));
        System.out.println("El sueldo semanal de Julieta es: " + sueldoSemanal(875, 41));
    }

    //    Desafío 3
//    Implementar un programa que nos permite mostrar por consola los primeros “n” números
//    primos, siendo “n” un valor numérico ingresado por consola. Por ejemplo: Con n=7, lo
//    que debería devolver el programa es “Los primeros 7 números primos son: 2, 3, 5, 7, 11, 13, 17”.
    public static String listaPrimos(Integer num) {
        String lista = "";
        Integer contador = 0;
        int numeroEvaluado = 2;
        boolean primo;
        while (contador < num) {
            primo = true;
            for (int i = 2; i < numeroEvaluado; i++) if (numeroEvaluado % i == 0) primo = false;
            if (primo) {
                lista = lista + ", " + numeroEvaluado;
                contador++;
            }
            numeroEvaluado++;
        }
        return lista;
    }

    //    Desafío 4
//    Por cuestiones laborales, se pueden trabajar hasta 40 horas semanales, si se trabajan más
//    horas las mismas se consideran horas extras cuyo valor es un 50% más que las horas de
//    trabajo normales. Crear un programa que pueda informar el sueldo semanal de la
//    programadora Julieta. Ella trabajó en la última semana “x” cantidad de horas y el valor de la
//    hora semanal es de 875.
    public static double sueldoSemanal(double valorHora, int cantidadDeHoras) {
        Double valorSueldoSemanal = 0.0;
        if (cantidadDeHoras <= 40) {
            valorSueldoSemanal = valorHora * cantidadDeHoras;
        } else {
            valorSueldoSemanal = (valorHora * 40) + ((cantidadDeHoras - 40) * (valorHora * 1.5));
        }
        return valorSueldoSemanal;
    }

}



