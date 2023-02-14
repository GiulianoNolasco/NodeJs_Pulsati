//• Crie um programa que leia uma lista de números do usuário e exiba a média desses números.

const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ListaDeNumeros = []; //Lista

const ChamarAReadLine = function () {
  readline1.question(
    "Informe um número (Para sair informe 'sair'): ",
    function (answer) {
      //Modulo para sair do loop e executar funcao final
      if (answer == "sair") {
        let somaLista = 0;
        for (let i = 0; i < ListaDeNumeros.length; i++) {
          somaLista += parseInt(ListaDeNumeros[i]);
        }
        let media = somaLista / ListaDeNumeros.length;
        console.log(
          `A média dos números informados (${ListaDeNumeros}), é: ${media}`
        );
        return readline1.close();
      }
      console.log('Você informou: "', answer, '"');
      ListaDeNumeros.push(answer);
      ChamarAReadLine(); //chamar novamente a mesma função lá em cima;
    }
  );
};

ChamarAReadLine(); // executar a funcao, iniciar.
