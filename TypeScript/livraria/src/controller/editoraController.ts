import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Editora } from "../model/editoraModel";

export class EditoraController {
  async create(req: Request, res: Response) {
    const {
      nome,
      CNPJ,
    }: {
      nome: string;
      CNPJ: string;
    } = req.body;
    const editora = new Editora();
    editora.nome = nome;
    editora.CNPJ = CNPJ;

    const repo = AppDataSource.getRepository(Editora);
    await repo.save(editora);

    res.json(editora);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Editora);
    const editora = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(editora);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, CNPJ } = req.body;

    const repo = AppDataSource.getRepository(Editora);
    const editora = await repo.findOneBy({ codigo: parseInt(id, 10) });
    editora.nome = nome;
    editora.CNPJ = CNPJ;

    await repo.save(editora);
    res.json(editora);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Editora);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar editora" });
  }
}
