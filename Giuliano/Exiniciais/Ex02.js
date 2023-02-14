//• Crie um programa que leia um nome do usuário e exiba uma saudação personalizada na tela.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Olá, qual o seu nome?', name => {
    console.log(`Olá ${name}! Seja bem vindo!`);
    readline.close();
  });