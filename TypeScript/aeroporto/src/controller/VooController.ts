import { Request, Response } from "express";
import AppDataSource from "../config/Database";
import { Voo } from "../model/voo";

export class VooController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Voo);
    const voo = await repo.find();
    res.json(voo);
  }
  async create(req: Request, res: Response) {
    const {
      codigoVoo,
      codigoAeroportoOrigem,
      codigoAeroportoDestino,
      nomeEmpresaAerea,
    }: {
      codigoVoo: number;
      codigoAeroportoOrigem: number;
      codigoAeroportoDestino: number;
      nomeEmpresaAerea: string;
    } = req.body;
    const voo = new Voo();
    voo.codigoVoo = codigoVoo;
    voo.codigoAeroportoOrigem = codigoAeroportoOrigem;
    voo.codigoAeroportoDestino = codigoAeroportoDestino;
    voo.nomeEmpresaAerea = nomeEmpresaAerea;

    const repo = AppDataSource.getRepository(Voo);
    await repo.save(voo);

    res.json(voo);
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;
    const {
      codigoVoo,
      codigoAeroportoOrigem,
      codigoAeroportoDestino,
      nomeEmpresaAerea,
    } = req.body;

    const repo = AppDataSource.getRepository(Voo);
    const voo = await repo.findOneBy({ codigo: parseInt(id, 10) });
    voo.codigoVoo = codigoVoo;
    voo.codigoAeroportoOrigem = codigoAeroportoOrigem;
    voo.codigoAeroportoDestino = codigoAeroportoDestino;
    voo.nomeEmpresaAerea = nomeEmpresaAerea;

    await repo.save(voo);
    res.json(voo);
  }

  async get(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Voo);
    const voo = await repo.findOneBy({ codigo: parseInt(id, 10) });

    res.json(voo);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    const repo = AppDataSource.getRepository(Voo);
    await repo.delete(id);
    res.json({ message: "Sucesso ao deletar voo" });
  }
}
