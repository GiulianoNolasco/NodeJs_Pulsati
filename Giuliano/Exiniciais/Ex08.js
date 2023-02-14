//• Crie um programa que leia dois números do usuário e exiba o resultado da multiplicação deles.


const readline1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline1.question('Informe o primero numero: ', num1 => {
    readline1.question('Informe o segundo numero: ', num2 => {
    console.log(parseInt( num1)*parseInt(num2));
    readline1.close();
  })
})