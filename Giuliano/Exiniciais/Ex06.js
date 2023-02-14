//• Crie um programa que leia um número do usuário e exiba a tabuada desse número.

const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline1.question("Informe um número para tabuada:?", (num1) => {
  for (let i = 1; i < 11; i++) {
    let resultado = num1 * i;
    console.log(`${i} * ${num1} = ${resultado}.`);
  }
  readline1.close();
});
