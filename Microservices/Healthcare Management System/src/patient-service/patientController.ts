import { Request, Response } from 'express';
import Patient from '../models/Patient.js';

const getAllPatients = async (req: Request, res: Response) => {
  const users = await Patient.find();
  res.send(users);
};

const createPatient = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = new Patient({
    name,
    email,
  });
  await user.save();
  res.status(201).send(user);
};

export default {
  getAllPatients,
  createPatient,
};
