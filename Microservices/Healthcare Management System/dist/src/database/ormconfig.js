import { DataSource } from 'typeorm';
import { Patient } from '../models/Patient.js';
import { Doctor } from '../models/Doctor.js';
import { Appointment } from '../models/Appointments.js';
export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './src/database/database.sqlite',
    synchronize: true,
    logging: true,
    entities: [Patient, Doctor, Appointment],
});
