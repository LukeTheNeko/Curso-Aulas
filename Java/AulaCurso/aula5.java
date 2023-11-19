 // aula com a estrutura de repetição while:

import javax.swing.JOptionPane;
public class Main {
  public static void main (String[] args) {
    
    int quantidade;
    quantidade = Integer.parseInt(JOptionPane.showInputDialog("Quanas pessoas deseja cadastrar?"));
    
    String[] nome = new String[quantidade];
    int[] anoNasc = new int[quantidade];
    int[] idade = new int[quantidade];
      
    int pos = 0;
    while(pos < quantidade) {
       nome[pos] = JOptionPane.showInputDialog("Digite o nome de posição " + pos);
       anoNasc[pos] = Integer.parseInt(JOptionPane.showInputDialog("Digite o ano de nascimento na posição " + pos));
      idade[pos] = 2023 - anoNasc[pos];
     pos++; 
    }

   pos = 0;
   while(pos < quantidade) {
     System.out.println(nome[pos] + " você nasceu em " + anoNasc[pos] + " e tem " + idade[pos] + " anos ");
     pos++;
   }
  }
}