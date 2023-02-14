/*
Funcionalidades:
• A aplicação deve apresentar um menu no console com as opções, cada opção tem um número
• O menu de opções deve ter as seguintes opções:
- Adicionar aeroporto, com as informações de Nome, Código e Endereço
- Adicionar voo, com as informações de Código do voo, Código aeroporto origem, Código aeroporto destino e 
Nome da empresa aérea
- Adicionar passageiro em um voo, com as informações de Código do voo, Nome do passageiro
- Listar voos, apresentando as informações: código do voo, nome do aeroporto de origem, nome do aeroporto de 
destino e o nome de todos os passageiros no voo

• Quando o usuário digitar o número de uma das opções, a aplicação deve solicitar as informações através do 
console, sendo que todas as informações são de preenchimento obrigatório

Atenção: Você deve usar classes, arrays e maps para armazenar as informações obtidas do usuário.
*/

let Aeroporto = require("./Aeroporto");
let Voo = require("./Voo");
let Passageiro = require("./Passageiro");

class menuAeroporto extends Aeroporto.Aeroporto {
  static adicionarAeroporto1(nome, codigo, endereco) {
    let aeroporto = new Aeroporto.Aeroporto(nome, codigo, endereco);
    return aeroporto;
  }
}

class menuVoo extends Voo.Voo {
  static adicionarVoo2(
    codigoVoo,
    codigoAeroportoOrigem,
    codigoAeroportoDestino,
    nomeEmpresaAerea
  ) {
    let voo = new Voo.Voo(
      codigoVoo,
      codigoAeroportoOrigem,
      codigoAeroportoDestino,
      nomeEmpresaAerea
    );
    return voo;
  }
}

class menuPassageiro extends Passageiro.Passageiro {
  static adicionarPassageiro3 (codigoDeVooPassageiro, nomePassageiro){
    let passageiro = new Passageiro.Passageiro(
      codigoDeVooPassageiro,
      nomePassageiro
    );
    return passageiro;
  };
}

exports.menuAeroporto = menuAeroporto;
exports.menuVoo = menuVoo;
exports.menuPassageiro = menuPassageiro;
