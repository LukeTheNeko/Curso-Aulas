import java.util.Scanner;

public class Main {
     
  public static void main(String[] args) {
   Scanner x = new Scanner(System.in);
    
   String disciplina;
   double nota;
    
   System.out.println("Digite a disciplina");
   disciplina = x.nextLine();
    
   System.out.println("Digite a nota");
   nota = x.nextDouble();
    
    if(nota<6) {
      System.out.println("Ruim");
    } else if (nota <= 8) {
      System.out.println("Bom");
    } else if (nota <= 10) {
      System.out.println("Excelente");
    } else {
      System.out.println("Nota inválida"); 
    }   
  }
}