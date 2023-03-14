import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("aeroportos_giu_2ponto0s")
export class Aeroporto {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({ type: "number" })
  capacidade: number;
}
