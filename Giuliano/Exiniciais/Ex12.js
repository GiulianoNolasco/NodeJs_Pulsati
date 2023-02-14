//• Crie um programa que leia uma string do usuário e exiba a primeira letra de cada palavra nela.


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Olá, Informe uma Frase: ', frase => {
  let fraseContagem = frase.split(" ");
  let primeiraLetraDeCadaPalavra = [];
  for (let i = 0; i < fraseContagem.length; i++) {

    primeiraLetraDeCadaPalavra.push(fraseContagem[i].substring(0,1));
  }
  console.log(
    `A frase informada foi: ${frase}, e as primeiras letras de cada palavra são:  ${primeiraLetraDeCadaPalavra}.`
  );

  readline.close();
});