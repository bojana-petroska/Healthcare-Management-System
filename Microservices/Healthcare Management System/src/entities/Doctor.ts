import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  doctor_id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  specialty!: string;
}