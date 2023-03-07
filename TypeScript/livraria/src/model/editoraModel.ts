import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("a_editora_Gius")
export class Editora {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  nome: string;

  @Column({ type: "varchar2", nullable: false })
  CNPJ: string;
}
