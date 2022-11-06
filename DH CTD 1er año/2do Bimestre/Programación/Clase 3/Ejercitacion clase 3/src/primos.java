import java.util.Scanner;

public class primos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Integer numerosPrimos;
        System.out.println("Ingresa un numero");
        numerosPrimos = scanner.nextInt();

        System.out.println("1");
        for (int i = 1; i < numerosPrimos; i++) {
            Integer count = 0;
            for (int j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
                System.out.println(i);
            }
        }
    }
}
