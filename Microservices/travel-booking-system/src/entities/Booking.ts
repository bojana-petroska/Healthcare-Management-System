import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User.js';
import { Flight } from './Flight.js';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  booking_id!: number;

  @ManyToOne(() => User)
  user!: User;

  @ManyToOne(() => Flight)
  flight!: Flight;

  @Column()
  booking_date!: string;
}
