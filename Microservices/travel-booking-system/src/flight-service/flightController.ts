import { Request, Response } from 'express';
import flights, { Flight } from './flightModels.js';

const get = (req: Request, res: Response) => {
  res.status(200).send(flights);
};

const getById = (req: Request, res: Response) => {
  const flightId = parseInt(req.params.id);
  const flight = flights.find((f) => f.id === flightId);
  if (!flight) {
    return res.status(404).send({ message: 'Flight not found' });
  }
  res.status(200).send(flight);
};

const create = (req: Request, res: Response) => {
  const { origin, destination, price } = req.body;
  const newFlight: Flight = {
    id: flights.length + 1,
    origin,
    destination,
    price,
  };
  flights.push(newFlight);
  res.status(201).send(newFlight);
};

const remove = (req: Request, res: Response) => {
  const flightId = parseInt(req.params.id);
  const flightIndex = flights.findIndex((flight) => flight.id === flightId);
  flights.splice(flightIndex, 1);
  res.status(204).send();
};

export default {
  get,
  getById,
  create,
  remove,
};
