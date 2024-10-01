import { Request, Response } from 'express';
import { Doctor } from '../entities/Doctor.js';
import { AppDataSource } from '../database/ormconfig.js';
import { Appointment } from '../entities/Appointments.js';

const userRepo = AppDataSource.getRepository(Doctor);

const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await userRepo.find();
    res.send(doctors);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createDoctor = async (req: Request, res: Response) => {
  const { firstName, lastName, specialty } = req.body;
  const doctor = userRepo.create({ firstName, lastName, specialty });
  await userRepo.save(doctor);
  res.status(201).send(doctor);
};

const createAppointment = async (req: Request, res: Response) => {
  const appointmentData = req.body;
  console.log(req.body)
  try {
    const bookingRepository = AppDataSource.getRepository(Appointment);
    const newAppointments = bookingRepository.create(appointmentData);
    await bookingRepository.save(newAppointments);
    res.status(201).json(newAppointments);
  } catch (err) {
    res.status(400).json(err);
  }
};

export default {
  getAllDoctors,
  createDoctor,
  createAppointment,
};
