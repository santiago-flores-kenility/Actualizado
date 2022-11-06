import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


        Scanner sc;
        sc = new Scanner(System.in);
        int n1, n2, n3;
//        System.out.print("Introduzca primer número: ");
//        n1 = sc.nextInt();
//        System.out.print("Introduzca segundo número: ");
//        n2 = sc.nextInt();
//        System.out.print("Introduzca tercer número: ");
//        n3 = sc.nextInt();
//        System.out.println("El mayor es: " +maximoEntreTresNumeros(n1,n2,n3));

//        Ejercicio 3
//        boolean cadenasDeTextoDistintas(String unTextoA, String unTextoB)
//        que debe tomar dos cadenas de texto y devolver true, en caso de que sean distintos, o
//        false, en caso de que coincidan.

        System.out.println(esPrimo(18));

        System.out.println("Son distintas?: "+ cadenasDeTextoDistintas("Hola","Hola"));

    };

    public static Integer maximoEntreTresNumeros(Integer n1, Integer n2, Integer n3) {
        if (n1 > n2) {
            if (n1 > n3) {
                return n1;

            } else {
                return n3;

            }
        } else if (n2 > n3) {
                return n2;
        } else {
            return n3;
        }
    }

    public static boolean cadenasDeTextoDistintas(String unTextoA, String unTextoB){
        return !unTextoA.equals(unTextoB);
    }


    public static boolean esPrimo(Integer numero) {
        if (numero == 0 || numero == 1 ) {
            return false;
        }
        for (Integer i = 2; i < numero; i++) {
            if (numero % i == 0)
                return false;
        }
        return true;
    }



}