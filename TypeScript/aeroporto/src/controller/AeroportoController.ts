import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Aeroporto } from "../model/aeroporto";

export class AeroportoController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroporto = await repo.find();
    res.json(aeroporto);
  }
  async create(req: Request, res: Response) {
    const {
      nome,
      capacidade,
    }: {
      nome: string;
      capacidade: number;
    } = req.body;
    const aeroporto = new Aeroporto();
    aeroporto.nome = nome;
    aeroporto.capacidade = capacidade;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.save(aeroporto);

    res.json(aeroporto);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, capacidade } = req.body;

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroporto = await repo.findOneBy({ codigo: parseInt(id, 10) });
    aeroporto.nome = nome;
    aeroporto.capacidade = capacidade;

    await repo.save(aeroporto);
    res.json(aeroporto);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    const aeroporto = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(aeroporto);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Aeroporto);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar aeroporto" });
  }
}
