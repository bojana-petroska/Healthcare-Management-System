import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  patient_id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;
}