import { Request, Response } from 'express';
import { Patient } from '../entities/Patient.js';
import { AppDataSource } from '../database/ormconfig.js';

const userRepo = AppDataSource.getRepository(Patient);

const getAllPatients = async (req: Request, res: Response) => {
  try {
    const patients = await userRepo.find();
    res.send(patients);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createPatient = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  const patient = userRepo.create({ firstName, lastName });
  await userRepo.save(patient);
  res.status(201).send(patient);
};

export default {
  getAllPatients,
  createPatient,
};
