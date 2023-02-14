//• Crie um programa que leia uma string do usuário e exiba a quantidade de letras e palavras nela.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Informe uma palavra ou frase: ", (palavraOuFrase) => {
  let fraseContagem = palavraOuFrase.split(" ");
  let contagemDeLetras = [];
  for (let i = 0; i < palavraOuFrase.length; i++) {
    if (palavraOuFrase[i] != " ") {
      contagemDeLetras.push(palavraOuFrase[i]);
    }
  }
  console.log(
    `A palavra/frase informada foi: ${palavraOuFrase}, ela contém ${contagemDeLetras.length} letras e ${fraseContagem.length} palavras.`
  );

  readline.close();
});
