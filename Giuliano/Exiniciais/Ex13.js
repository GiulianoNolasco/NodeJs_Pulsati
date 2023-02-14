//•• Crie um programa que leia uma lista de números do usuário e exiba a mediana desses números.

const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let ListaDeNumeros = []; 

const ChamarAReadLine = function () {
  readline1.question(
    "Informe um número (Para sair informe 'sair'): ",
    function (numeroInformado) {
      if (numeroInformado == "sair") {
        let mediana = 200;

        ListaDeNumeros.sort(function (a, b) {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });

        if (ListaDeNumeros.length % 2 == 0) {
          let num1 = parseInt(ListaDeNumeros.length / 2 - 1);
          let num2 = parseInt(ListaDeNumeros.length / 2 + 1 - 1);
          let calculo =
            (parseInt(ListaDeNumeros[num1]) + parseInt(ListaDeNumeros[num2])) /
            2;
          mediana = calculo;
        } else {
          let metadeDaLista = (ListaDeNumeros.length + 1) / 2 - 1;
          mediana = ListaDeNumeros[metadeDaLista];
        }

        console.log(
          `A mediana dos números informados ${ListaDeNumeros}, é: ${mediana}`
        );
        return readline1.close();
      }

      ListaDeNumeros.push(parseInt(numeroInformado));
      ChamarAReadLine();
    }
  );
};

ChamarAReadLine();
