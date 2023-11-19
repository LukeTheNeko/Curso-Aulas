// Programa para cadastrar e exibir 6 nomes usando estrutura de repetição for.

import javax.swing.JOptionPane;
public class Main {
  public static void main (String[] args) {
    //Vetores
    String nome[];
    nome = new String[6];

for(int posicao = 0; posicao <= 5; posicao++) {
 nome[posicao] = JOptionPane.showInputDialog("Qual o nome " + posicao + "?");
}
    for(int i = 0; i <= 5; i++) {
       System.out.println(nome[i]);
    }
  }
}