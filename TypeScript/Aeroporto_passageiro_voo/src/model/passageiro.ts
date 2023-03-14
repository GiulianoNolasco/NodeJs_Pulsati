import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("passageiros_giu_2ponto0s")
export class Passageiro {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({ type: "number" })
  codigoVoo: number;
}
