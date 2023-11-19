// Para pedir os 12 nomes e armazenar na matriz nome e, em seguida, exibi-los

import javax.swing.JOptionPane;
public class Main {

  public static void main(String[] args) {
    String[][] nome = new String[4][3];

    for (int coluna = 0; coluna <= 2; coluna++) {
      for (int linha = 0; linha <= 3; linha++) {
        nome[linha][coluna] = JOptionPane.showInputDialog(null, "Digite o nome na posição " + "linha = " + linha + " coluna = " + coluna);
      }
    }

    for (int coluna = 0; coluna <= 2; coluna++) {
      for (int linha = 0; linha <= 3; linha++) {
        System.out.println(nome[linha][coluna]);
      }
    }
  }
}