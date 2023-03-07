import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("a_livro_Gius")
export class Livro {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ type: "varchar2", nullable: false })
  titulo: string;

  @Column({ type: "number", nullable: false })
  numeroEdicao: number;

  @Column({ type: "number", nullable: false })
  anoLancamento: number;

  @Column({ type: "number", nullable: false })
  codigoEditor: number;

  @Column({ type: "number", nullable: false })
  codigoAutor: number;
}
