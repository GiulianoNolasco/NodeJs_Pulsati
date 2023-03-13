const { Aeroporto } = require("../Model/aeroportoModel");
import { Request, Response } from "express";
import AppDataSource from "../config/Database";



export class UsuarioController {
  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Usuario);
    const usuarios = await repo.find();
    res.json(usuarios);
  }


  async createAeroporto  (req: Request, res: Response) => {
  const { nome, capacidade } = req.body;
  const aeroporto = new Aeroporto();
  aeroporto.nome = nome;
  aeroporto.capacidade = capacidade;
  await aeroporto.save();
  res.json(aeroporto);
};
async getAeroportoById  (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  res.json(aeroporto);
};

exports.getAeroporto = async (req, res) => {
  Aeroporto.findAll().then((result) => res.json(result));
};

exports.putAeroporto = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  const { nome, capacidade } = req.body;
  aeroporto.nome = nome;
  aeroporto.capacidade = capacidade;
  await aeroporto.save();
  res.json(aeroporto);
};

exports.deleteAeroporto = async (req, res) => {
  const codigo = req.params.codigo;
  const aeroporto = await Aeroporto.findByPk(codigo);
  await aeroporto.destroy();
  res.json({ data: "Aeroporto deletado com sucesso" });
};
}