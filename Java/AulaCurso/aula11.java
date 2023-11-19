import javax.swing.JOptionPane;

public class Main {
     
  public static void main(String[] args) {
   String disciplina;
   double nota;
   disciplina = JOptionPane.showInputDialog("Digite a disciplina");
   nota = Double.parseDouble(JOptionPane.showInputDialog("Digite a nota"));
    if(nota<6) {
      JOptionPane.showMessageDialog(null,"Ruim");
    } else if (nota >= 6 && nota <= 8) {
      JOptionPane.showMessageDialog(null,"Bom");
    } else if (nota > 8 && nota <= 10) {
      JOptionPane.showMessageDialog(null,"Excelente");
    } else {
      JOptionPane.showMessageDialog(null,"Nota inválida"); 
    }    
  }
}