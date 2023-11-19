import javax.swing.JOptionPane;
public class Main {
  public static void main(String[] args) {
      String funcionarios[][] = new String[5][3];
    funcionarios[0][0] = "Ana Maria";
    funcionarios[0][1] = "(11)8976-6754";
    funcionarios[0][2] = "ana@gmail.com";
    funcionarios[1][0] = "Paulo Cesar";
    funcionarios[1][1] = "(11)7654-9087";
    funcionarios[1][2] = "paulo@hotmail.com";
    funcionarios[2][0] = "André Teixeira";
    funcionarios[2][1] = "(21)7865-7865";
    funcionarios[2][2] = "andre@gmail.com";
    funcionarios[3][0] = "Marta Ribeiro";
    funcionarios[3][1] = "(17)5432-9087";
    funcionarios[3][2] = "marta@gmail.com";
    funcionarios[4][0] = "Paulo Teixeira";
    funcionarios[4][1] = "(53)6754-9034";
    funcionarios[4][2] = "pteixeira@gmail.com";

    System.out.println(funcionarios[3][0]);
    System.out.println(funcionarios[3][1]);
    System.out.println(funcionarios[3][2]);

    for (int coluna = 0; coluna < 3; coluna++) {
      for (int linha = 0; linha < 4; linha++) {
        if (funcionarios[linha][coluna].equals("ana@gmail.com")) {
          System.out.print("O email ana@gmail.com foi encontrado na linha " + linha + " e coluna " + coluna);
        }
      }
    }

  }
}