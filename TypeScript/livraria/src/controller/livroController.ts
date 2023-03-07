import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Livro } from "../model/livroModel";

export class LivroController {
  async create(req: Request, res: Response) {
    const {
      titulo,
      numeroEdicao,
      anoLancamento,
      codigoEditor,
      codigoAutor,
    }: {
      titulo: string;
      numeroEdicao: number;
      anoLancamento: number;
      codigoEditor: number;
      codigoAutor: number;
    } = req.body;
    const livro = new Livro();
    livro.titulo = titulo;
    livro.numeroEdicao = numeroEdicao;
    livro.anoLancamento = anoLancamento;
    livro.codigoEditor = codigoEditor;
    livro.codigoAutor = codigoAutor;

    const repo = AppDataSource.getRepository(Livro);
    await repo.save(livro);

    res.json(livro);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Livro);
    const livro = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(livro);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { titulo, numeroEdicao, anoLancamento, codigoEditor, codigoAutor } =
      req.body;

    const repo = AppDataSource.getRepository(Livro);
    const livro = await repo.findOneBy({ codigo: parseInt(id, 10) });
    livro.titulo = titulo;
    livro.numeroEdicao = numeroEdicao;
    livro.anoLancamento = anoLancamento;
    livro.codigoEditor = codigoEditor;
    livro.codigoAutor = codigoAutor;

    await repo.save(livro);
    res.json(livro);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Livro);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar livro" });
  }

  async getLivroEInformacoes(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Livro);
    const livro = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(livro);
  }
}
