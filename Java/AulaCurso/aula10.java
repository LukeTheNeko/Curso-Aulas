/*
1) Crie duas matrizes de tamanho 2 linhas e 3 colunas: nome do tipo String e salario do tipo int. Crie laços de repetição (for ou while) e peça nomes e salários para popular (preencher) as duas matrizes.
3) Crie outros laços de repetição (for ou while) para exibir os nomes e salários armazenados nas duas matrizes.
4) Some os salários colocados na matriz salario e exiba a mensagem "A soma dos salários é" e o resultado da soma. 
*/

import javax.swing.JOptionPane;
public class Main {
  public static void main (String[] args) {
    
    int[] numeros = new int[20];
      
    for(int pos = 0; pos < 20; pos++ ) {
       numeros[pos] = Integer.parseInt(JOptionPane.showInputDialog("Digite o número da na posição " + pos));
    }

    for(int pos = 0 ; pos < 20; pos++) {
     System.out.println(numeros[pos]);
    }

    int soma=0;
    for(int pos = 0 ; pos < 20; pos++) {
     soma = soma + numeros[pos];
    }

    System.out.println("O resultado da soma é " + soma);
  
  }
}