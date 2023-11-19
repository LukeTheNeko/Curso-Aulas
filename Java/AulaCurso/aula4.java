/*
Arrays (vetores);
Laços de repetição (for, while, do while).

Exemplo visto em aula com a estrutura de repetição for:
*/

import javax.swing.JOptionPane;
public class Main {
  public static void main (String[] args) {
    
    int quantidade;
    quantidade = Integer.parseInt(JOptionPane.showInputDialog("Quanas pessoas deseja cadastrar?"));
    
    String[] nome = new String[quantidade];
    int[] anoNasc = new int[quantidade];
    int[] idade = new int[quantidade];
      
    for(int pos = 0; pos < quantidade; pos++ ) {
       nome[pos] = JOptionPane.showInputDialog("Digite o nome de posição " + pos);
       anoNasc[pos] = Integer.parseInt(JOptionPane.showInputDialog("Digite o ano de nascimento na posição " + pos));
      idade[pos] = 2023 - anoNasc[pos];
    }

   for(int pos = 0 ; pos < quantidade; pos++) {
     System.out.println(nome[pos] + " você nasceu em " + anoNasc[pos] + " e tem " + idade[pos] + " anos ");
   }
  }
}