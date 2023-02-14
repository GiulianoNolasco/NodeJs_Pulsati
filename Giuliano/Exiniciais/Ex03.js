//• Crie um programa que leia uma lista de palavras do usuário e as exiba em ordem alfabética.

//Cria a readline
const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ListaDeNomes = []; //Lista


const ChamarAReadLine = function () {
  readline1.question(
    "Informe um nome (Para sair informe 'sair'): ",
    function (answer) {
        //Modulo para sair do loop e executar funcao final
      if (answer == "sair") {
        ListaDeNomes.sort();
        console.log(ListaDeNomes);
        return readline1.close();
      }
      console.log('Você informou: "', answer, '"');
      ListaDeNomes.push(answer);
      ChamarAReadLine(); //chamar novamente a mesma função lá em cima;
    }
  );
};

ChamarAReadLine(); // executar a funcao, iniciar.
