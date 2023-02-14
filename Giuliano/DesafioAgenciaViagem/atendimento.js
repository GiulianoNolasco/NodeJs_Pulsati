const menuA = require("./menu").menuAeroporto;
const menuV = require("./menu").menuVoo;
const menuP = require("./menu").menuPassageiro;
let Voo = require("./Voo");


const aeroportos = [];
const voos = [];
const passageiros = [];

const atendimentoUsuario = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const AtendimentoMenu = function () {
  atendimentoUsuario.question(
    "################## Atendimento iniciado ################## \n1-adicionarAeroporto \n2-adicionarVoo \n3-adicionarPassageiro \n4-listarVoos) \n0 - Sair \nInforme o número do atendimento desejado:  ",
    function (opcaoEscolhida) {
      if (opcaoEscolhida == 1) {
        menuAeroporto();
      } else if (opcaoEscolhida == 2) {
        menuVoo();
      } else if (opcaoEscolhida == 3) {
        menuPassageiro();
      } else if (opcaoEscolhida == 4) {
        menuListarVoos();
      } else if (opcaoEscolhida == 0) {
        console.log("Saindo do programa");
        readLine.close();
      } else {
        console.log("Opção inválida\n");
        AtendimentoMenu();
      }
    }
  );
};
AtendimentoMenu();

const menuAeroporto = () => {
  atendimentoUsuario.question("Qual o número do aeroporto? ", (nome) => {
    atendimentoUsuario.question("Qual o código do aeroporto? ", (codigo) => {
      atendimentoUsuario.question(
        "Qual o endereço do aeroporto? ",
        (endereco) => {
          aeroportos.push(menuA.adicionarAeroporto1(nome, codigo, endereco));
          console.log(`Aeroporto criado com sucesso---------------- `);
          console.log(aeroportos);
          AtendimentoMenu();
        }
      );
    });
  });
};

const menuVoo = () => {
  atendimentoUsuario.question("Qual o código do Vôo? ", (codigoVoo) => {
    atendimentoUsuario.question(
      "Qual o código do aeroporto de origem? ",
      (codigoAeroportoOrigem) => {
        atendimentoUsuario.question(
          "Qual o código do aeroporto de destino? ",
          (codigoAeroportoDestino) => {
            atendimentoUsuario.question(
              "Qual o nome da empresa Aérea? ",
              (nomeEmpresaAerea) => {
                voos.push(
                  menuV.adicionarVoo2(
                    codigoVoo,
                    codigoAeroportoOrigem,
                    codigoAeroportoDestino,
                    nomeEmpresaAerea
                  )
                );
                console.log(`Vôo criado com sucesso---------------- `);
                console.log(voos);
                AtendimentoMenu();
              }
            );
          }
        );
      }
    );
  });
};

const menuPassageiro = () => {
  atendimentoUsuario.question(
    "Qual o número do aeroporto? ",
    (codigoDeVooPassageiro) => {
      atendimentoUsuario.question(
        "Qual o código do aeroporto? ",
        (nomePassageiro) => {
          passageiros.push(
            menuP.adicionarPassageiro3(codigoDeVooPassageiro, nomePassageiro)
          );
          console.log(`Passageiro criado com sucesso---------------- `);
          console.log(passageiros);
          AtendimentoMenu();
        }
      );
    }
  );
};

const menuListarVoos = () => {
  console.log("\nListagem de voos\n")
  console.log(voos);
  console.log("\nListagem de aeroportos\n")
  console.log(aeroportos);
  console.log("\nListagem de passageiros\n")
  console.log(passageiros)
  AtendimentoMenu();
};
