import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Passageiro } from "../model/passageiro";

export class PassageiroController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Passageiro);
    const passageiro = await repo.find();
    res.json(passageiro);
  }
  async create(req: Request, res: Response) {
    const {
      nome,
      codigoVoo,
    }: {
      nome: string;
      codigoVoo: number;
    } = req.body;
    const passageiro = new Passageiro();
    passageiro.nome = nome;
    passageiro.codigoVoo = codigoVoo;

    const repo = AppDataSource.getRepository(Passageiro);
    await repo.save(passageiro);

    res.json(passageiro);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const { nome, codigoVoo } = req.body;

    const repo = AppDataSource.getRepository(Passageiro);
    const passageiro = await repo.findOneBy({ codigo: parseInt(id, 10) });
    passageiro.nome = nome;
    passageiro.codigoVoo = codigoVoo;

    await repo.save(passageiro);
    res.json(passageiro);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Passageiro);
    const passageiro = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(passageiro);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Passageiro);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar passageiro" });
  }
}
