import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("voos_giu_2ponto0s")
export class Voo {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "number" })
  codigoVoo: number;

  @Column({ type: "number" })
  codigoAeroportoOrigem: number;

  @Column({ type: "number" })
  codigoAeroportoDestino: number;

  @Column({ type: "varchar2", nullable: false })
  nomeEmpresaAerea: string;
}
