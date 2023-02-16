const fs = require("fs");

exports.salvarArquivo = (nomeArquivo, texto) => {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.writeFile(nomeArquivo, texto, (erro) => {
        if (erro) {
          reject(erro);
        } else {
          resolve();
        }
      });
    }, Math.random(3));
  });
  return promessa;
};

exports.lerArquivo = (nomeArquivo) => {
  const promessa = new Promise((resolve, reject) => {
    fs.readFile(nomeArquivo, "utf-8", (erro, texto) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(texto);
      }
    });
  });
  return promessa;
};

exports.lerArquivosJson = (nomeArquivo) => {
  const promessa = new Promise((resolve, reject) => {
    fs.readFile(nomeArquivo, "utf-8", (erro, texto) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(texto);
      }
    });
  });
  return promessa;
};
exports.excluirArquivo = (nomeArquivo) => {
  const promessa = new Promise((reject) => {
    fs.unlink(nomeArquivo, (erro) => {
      if (erro) {
        reject(erro);
      } else {
        console.log("Arquivo deletado!");
      }
    });
  });
  return promessa;
};
