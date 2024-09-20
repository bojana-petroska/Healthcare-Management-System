import { Request, Response } from 'express';
import Flight from './flightModels.js';
import User from '../user-service/userModels.js';

const get = async (req: Request, res: Response) => {
  const flights = await Flight.find();
  res.status(200).send(flights);
};

const getById = async (req: Request, res: Response) => {
  const flightId = req.params.id;
  const flight = await Flight.findById(flightId);
  if (!flight) {
    return res.status(404).send({ message: 'Flight not found' });
  }
  res.status(200).send(flight);
};

const create = async (req: Request, res: Response) => {
  const { origin, destination, price, name, email } = req.body;

  if (!origin || !destination || !price || !name || !email) {
    res.status(400).send({ message: `all fields are required` });
  }

  try {
    const newFlight = new Flight({
      origin,
      destination,
      price,
    });

    await newFlight.save();

    const user = await User.findOne({ email });

    if (!user) {
      const user = new User({
        name,
        email,
      });
      await user.save();
    }
    res.status(201).send({
      user: user,
      flight: newFlight,
    });
  } catch {
    res.status(500).send({ message: `error` });
  }
};

const remove = async (req: Request, res: Response) => {
  const flightId = req.params.id;
  const flight = await Flight.findByIdAndDelete(flightId);

  if (!flight) {
    return res.status(404).send({ message: 'Flight not found' });
  }
  res.status(204).send();
};

export default {
  get,
  getById,
  create,
  remove,
};
