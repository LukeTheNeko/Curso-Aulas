// Programa para cadastrar e exibir 400 nomes.

import javax.swing.JOptionPane;
public class Main {
  public static void main (String[] args) {
    //Vetores
    String nome[];
    nome = new String[400];
    nome[0] = JOptionPane.showInputDialog("Qual o primeiro nome?");
    nome[1] = JOptionPane.showInputDialog("Qual o segundo nome?");
    nome[2] = JOptionPane.showInputDialog("Qual o terceiro nome?");
    
    nome[399] = JOptionPane.showInputDialog("Qual o último nome?");

    System.out.println(nome[0]);
    System.out.println(nome[1]);
    System.out.println(nome[2]);
    System.out.println(nome[399]);
  }
}