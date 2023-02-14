//•Crie um programa que use as novas constantes do ECMAScript 6 para definir uma constante que represente uma
//conversão de temperatura (Celsius para Fahrenheit).

const temperatura = 50;
let tipoTemperatura = "K";
let tipoTemperaturaNova = "C";

function converterTemperatura(temp, tipoT, tipoTN) {
  let resultado = 0;
  if (tipoT == "K" && tipoTN == "C") {
    resultado = temp - 273.15;
  }
  if (tipoT == "K" && tipoTN == "F") {
    resultado = ((temp - 273.15) * 9) / 5 + 32;
  }
  if (tipoT == "F" && tipoTN == "C") {
    resultado = ((temp - 32) * 5) / 9;
  }
  if (tipoT == "F" && tipoTN == "K") {
    (resultado = ((temp - 32) * 5) / 9 + 273), 15;
  }
  if (tipoT == "C" && tipoTN == "K") {
    resultado = temp + 273.15;
  }
  if (tipoT == "C" && tipoTN == "F") {
    resultado = (temp * 9) / 5 + 32;
  }
  Math.round(2).resultado;
  console.log(`A conversão de ${temp}º${tipoT} fica ${resultado}º${tipoTN}`);
}

converterTemperatura(temperatura, tipoTemperatura, tipoTemperaturaNova);
