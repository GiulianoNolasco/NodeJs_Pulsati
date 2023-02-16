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

exports.lerArquivos = async (fileNames) => {
  const data = [];
  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.promises.readFile(fileName))
  );

  for (let file of fileContents) {
    // const buffer = fs.readFileSync(file);
    const jsonStrig = file.toString();
    const json = JSON.parse(jsonStrig);
    data.push(json);
  }
  console.log(data, "data aquiiiiii");
  return data;
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
