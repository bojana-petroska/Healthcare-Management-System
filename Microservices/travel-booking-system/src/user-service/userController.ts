import { Request, Response } from 'express';
import User from './userModels.js';

// CRUD
const get = async (req: Request, res: Response) => {
  const users = await User.find();
  res.send(users);
};

const getById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).send({ message: `user not found` });
  }
  res.status(200).send(user);
};

const create = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = new User({
    name,
    email,
  });
  await newUser.save();
  res.status(201).send(newUser);
};

const update = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  const user = await User.findByIdAndUpdate(
    userId,
    { name, email },
    { new: true }
  );

  if (!user) {
    res.status(404).send({ message: `user not found` });
  }
  res.status(200).send(user);
};

const remove = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId);

  if (!user) {
    res.status(404).send({ message: `user not found` });
  }
  res.status(204).send();
};

export default {
  get,
  getById,
  create,
  update,
  remove,
};
