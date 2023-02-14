[10:35] Adriana Dias Brunner
/* • Crie uma aplicação de gerenciamento de viagens, com classes "Passageiro", "Voo" e "Aeroporto".
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
Atenção: Você deve usar classes, arrays e maps para armazenar as informações obtidas do usuário.*/

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class Aeroporto {
    constructor(nomeAeroporto, codigo, endereco) {
        this.nomeAeroporto = nomeAeroporto;
        this.codigo = codigo;
        this.endereco = endereco;
    }
}

class Voo {
    codigoDoVoo;
    codigoAeroportoOrigem;
    codigoAeroportoDestino;
    nomeEmpresaAerea;
    passageiros = [];

    constructor(codigoDoVoo, codigoAeroportoOrigem, codigoAeroportoDestino, nomeEmpresaAerea) {
        this.codigoDoVoo = codigoDoVoo;
        this.codigoAeroportoOrigem = codigoAeroportoOrigem;
        this.codigoAeroportoDestino = codigoAeroportoDestino;
        this.nomeEmpresaAerea = nomeEmpresaAerea;
        this.passageiros = [];
    }

    adicionarPassageiro(nomePassageiro) {
        this.passageiros.push(nomePassageiro);
    }
}

class Passageiro {
    codigoVoo;
    nomePassageiro;

    constructor(codigoVoo, nomePassageiro) {
        this.codigoVoo = codigoVoo;
        this.nomePassageiro = nomePassageiro;
    }
}

const aeroportos = new Map();
const voos = new Map();
const passageiros = new Map();

function exibirMenu() {
    readLine.question('Escolha uma das opções abaixo:\n1. Adicionar aeroporto\n2. Adicionar voo\n3. Adicionar passageiro a um voo\n4. Listar voos\n0. Sair\n', (option) => {
        let opcaoEscolhida = option;

        if (opcaoEscolhida == 1) {
            adicionarAeroporto();
        } else if (opcaoEscolhida == 2) {
            adicionarVoo();
        } else if (opcaoEscolhida == 3) {
            adicionarPassageiro();
        } else if (opcaoEscolhida == 4) {
            listarVoos();
        } else if (opcaoEscolhida == 0) {
            console.log("Saindo do programa")
            readLine.close();
        } else {
            console.log('Opção inválida\n');
            exibirMenu();
        }
    });
}

exibirMenu();

const adicionarAeroporto = () => {
console.log('Digite o nome do aeroporto:');
    readLine.question('', (nomeAeroporto) => {
        console.log('Digite o código do aeroporto:')
        readLine.question('', (codigo) => {
            console.log('Digite o endereço do aeroporto:')
            readLine.question('', (endereco) => {
                aeroportos.set(new Aeroporto(nomeAeroporto, codigo, endereco))
                console.log('Aeroporto adicionado com sucesso!\n');
                exibirMenu();
            });
        });
    });
}

const adicionarVoo = () => {
    console.log('Digite o código do voo:');
    readLine.question('', (codigoDoVoo) => {
        console.log('Digite o código do aeroporto origem:');
        readLine.question('', (codigoAeroportoOrigem) => {
            console.log('Digite o código do aeroporto destino:');
            readLine.question('', (codigoAeroportoDestino) => {
                voos.set(new Voo(codigoDoVoo, codigoAeroportoOrigem, codigoAeroportoDestino))
                console.log('Voo adicionado com sucesso!\n');
                exibirMenu();
            });
        });
    });
};

const adicionarPassageiro = () => {
    console.log('Digite o código do voo:');
    readLine.question('', (codigoDoVoo) => {
        console.log('Digite o nome do passageiro:');
        readLine.question('', (nomePassageiro) => {
            new Passageiro(codigoDoVoo, nomePassageiro)
            passageiros.adicionarPassageiro(nomePassageiro);
            console.log('Passageiro adicionado com sucesso!\n');
            exibirMenu();
        });
    });
};

const listarVoos = () => {
    for (const [codigoVoo, codigoAeroportoDestino, codigoAeroportoOrigem] of Voo) {
        console.log("Código do voo: " + codigoVoo);
        console.log("\nCodigo aeroporto de origem: " + codigoAeroportoOrigem);
        console.log("\nCodigo aeroporto de destino: " + codigoAeroportoDestino);
        console.log(Passageiro)
    }
    exibirMenu();
}




