/* Prova

Faça um programa que solicite o DDD de uma cidade e compare:
Se o DDD for igual a 11, exiba a mensagem “São Paulo”, senão, 
Se o DDD for igual a 19, exiba a mensagem “Campinas”, senão,
Se o DDD for igual a 17, exiba a mensagem Ribeirão Preto, senão
Exiba a mensagem “DDD não reconhecido”.
*/

 // Solução 2

import javax.swing.JOptionPane;
public class Main {
  public static void main(String[] args) {
   byte ddd;
   ddd = Byte.parseByte(JOptionPane.showInputDialog("Informe o DDD"));
   switch(ddd) {
     case 11:
        System.out.println("São Paulo");
        break;
     case 19:
        System.out.println("Campinas");
        break;
     case 17:
        System.out.println("Ribeirão Preto");
        break;
     default:
        System.out.println("DDD não reconhecido");
        break;     
   }
  }
}