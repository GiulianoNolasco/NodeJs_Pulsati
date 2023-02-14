//• Crie um programa que verifique se um número fornecido pelo usuário é par ou ímpar.

const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline1.question("Informe um número:", (num) => {
  let resposta  ='Ímpar';
    if (num % 2 == 0) {
    resposta = 'Par';
    readline1.close();
  }
  console.log(`O número informado: ${num} é ${resposta}.`);
  readline1.close();
});
