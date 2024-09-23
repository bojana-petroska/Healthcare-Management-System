import Flight from './flightModels.js';
import axios from 'axios';
const get = async (req, res) => {
    const flights = await Flight.find();
    res.status(200).send(flights);
};
const getById = async (req, res) => {
    const flightId = req.params.id;
    try {
        const flight = await Flight.findById(flightId);
        if (!flight) {
            return res.status(404).send({ message: 'Flight not found' });
        }
        res.status(200).send(flight);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const create = async (req, res) => {
    const { origin, destination, price, userId } = req.body;
    const newFlight = new Flight({
        origin,
        destination,
        price,
    });
    if (!origin || !destination || !price) {
        res.status(400).send({ message: `all fields are required` });
    }
    try {
        const userRequest = await axios.get(`http://localhost:3001/users/${userId}`);
        const flight = new Flight(newFlight);
        await flight.save();
        res.status(201).send(newFlight);
    }
    catch {
        res.status(404).send({ message: `userId is wrong` });
        // res.status(500).send({ message: `something went wrong` });
    }
    // } else {
    // }
};
const remove = async (req, res) => {
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
