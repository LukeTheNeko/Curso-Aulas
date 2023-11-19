import javax.swing.JOptionPane;
public class Main {
  public static void main(String[] args) {
      String cidades[] = new String[5];
    for (int pos = 0; pos < 5; pos++) {
      cidades[pos] = JOptionPane.showInputDialog("Digite a cidade de posição " + pos);
    }

    for (int pos = 0; pos < 5; pos++) {
      if (cidades[pos].equals("Campinas")) {
        JOptionPane.showMessageDialog(null, "A cidade Campinas foi encontrada na posição " + pos);
      }
    }

    for (int pos = 0; pos < 5; pos++) {
      System.out.println(cidades[pos]);
    }

  }
}