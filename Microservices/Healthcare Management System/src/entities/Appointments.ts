import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Patient } from './Patient.js';
import { Doctor } from './Doctor.js';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  appointment_id!: number;

  @ManyToOne(() => Patient)
  patient!: Patient;

  @ManyToOne(() => Doctor)
  doctor!: Doctor;

  @Column()
  booking_date!: string;
}
