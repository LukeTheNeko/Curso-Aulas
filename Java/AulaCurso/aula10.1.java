import java.util.Scanner;
public class Main {
  public static void main (String[] args) {
    
    int[] numeros = new int[20];
    Scanner scanner = new Scanner(System.in);
    
    for(int pos = 0; pos < 20; pos++ ) {
      System.out.print("Digite o número da posição " + pos);
       numeros[pos] = scanner.nextInt();
    }

    for(int pos = 0 ; pos < 20; pos++) {
     System.out.println(numeros[pos]);
    }

    int soma=0;
    for(int pos = 0 ; pos < 20; pos++) {
     soma = soma + numeros[pos];
    }

    System.out.println("O resultado da soma é " + soma);
  }
}