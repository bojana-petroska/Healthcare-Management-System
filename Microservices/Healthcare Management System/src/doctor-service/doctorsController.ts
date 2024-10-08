import { Request, Response } from 'express';
import Doctor from '../models/Doctor.js';

const getAllDoctors = async (req: Request, res: Response) => {
  const users = await Doctor.find();
  res.send(users);
};

const createDoctor = async (req: Request, res: Response) => {
  const { name, lastName, specialty } = req.body;
  const doctor = new Doctor({ name, lastName, specialty });
  await doctor.save();
  res.status(201).send(doctor);
};

export default {
  getAllDoctors,
  createDoctor,
};
