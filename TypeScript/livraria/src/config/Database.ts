import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

import { Autor } from "../model/autorModel";
import { Editora } from "../model/editoraModel";
import { Livro } from "../model/livroModel";

const AppDataSource = new DataSource({
  type: "oracle",
  host: "192.168.0.50",
  port: 1521,
  username: "system",
  password: "pulsati2023",
  database: "xe",
  entities: [Autor, Editora, Livro],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});

export default AppDataSource;
