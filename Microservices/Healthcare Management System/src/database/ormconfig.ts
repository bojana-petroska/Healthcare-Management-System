import { DataSource } from "typeorm";
import { Patient } from "../entities/Patient.js";
import { Doctor } from "../entities/Doctor.js";
import { Appointment } from "../entities/Appointments.js";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    synchronize: true,
    logging: true,
    entities: [Patient, Doctor, Appointment],
  });