//• Crie um programa que leia um número do usuário e exiba a sua raiz quadrada.




const readline1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline1.question('Informe um número para saber a sua raiz quadrada: ', num => {
    console.log(Math.sqrt(num));
    readline1.close();
})