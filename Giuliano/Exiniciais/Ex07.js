//• Crie um programa que verifique se um número fornecido pelo usuário é primo ou não.

const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline1.question(
  "Informe um número para verificar se é primo:?",
  (numero) => {
    let resposta = "Não é primo";
    let quantidadeDivisores = 0;
    for (let i = 1; i <= numero; i++)
      if (numero % i == 0) {
        quantidadeDivisores++;
      }

    if (quantidadeDivisores == 2) {
      resposta = "É primo";
      readline1.close();
    }
    console.log(`O número informado: ${numero} é ${resposta}.`);
    readline1.close();
  }
);
