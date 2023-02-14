const { Aeroporto } = require("./Aeroporto");
const { Passageiro } = require("./Passageiro");
const { Voo } = require("./Voo");

const menuA = require("./menu").menuAeroporto;
const SalvaA = require("./Aeroporto").Aeroporto.getDadosCompletos;
const menuV = require("./menu").menuVoo;
const menuP = require("./menu").menuPassageiro;
const salvarArquivo = require("./promise").salvarArquivo;
const lerArquivo = require("./promise").lerArquivo;

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
          const aerop = new Aeroporto(nome, codigo, endereco);
          aeroportos.push(aerop);
          salvarArquivo("aeroporto", aerop.getDadosCompletos());
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
                const v = new Voo(codigoAeroportoOrigem, codigoAeroportoDestino, nomeEmpresaAerea);
                voos.push(v);
                salvarArquivo("Voo", v.getDadosCompletos());
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
    "Qual o codigo De Voo? ",
    (codigoDeVooPassageiro) => {
      atendimentoUsuario.question(
        "Qual o nome do Passageiro? ",
        (nomePassageiro) => {
          const p = new Passageiro(codigoDeVooPassageiro, nomePassageiro);
          passageiros.push(p);
          salvarArquivo("passageiro", p.getDadosCompletos());
          console.log(`Passageiro criado com sucesso---------------- `);
          console.log(passageiros);
          AtendimentoMenu();
        }
      );
    }
  );
};

const menuListarVoos = () => {
  console.log("\nListagem de voos\n");
  console.log(voos);
  console.log("\nListagem de aeroportos\n");
  console.log(aeroportos);
  console.log("\nListagem de passageiros\n");
  console.log(passageiros);
  AtendimentoMenu();
};
