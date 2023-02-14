//• • Crie um programa que leia um número do usuário e exiba o seu fatorial.

const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline1.question("Informe um numero: ", (numero) => {
  let resultadoFatorial = numero * (numero - 1);

  for (let i = numero - 2; i >= 1; i--) {
    resultadoFatorial = resultadoFatorial * i;
  }

  console.log(
    `O número informado foi o ${numero} e o fatorial deste número é o ${resultadoFatorial}`
  );
  readline1.close();
});
