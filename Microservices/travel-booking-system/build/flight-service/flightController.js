import flights from './flightModels.js';
const get = (req, res) => {
    res.status(200).send(flights);
};
const getById = (req, res) => {
    const flightId = parseInt(req.params.id);
    const flight = flights.find((f) => f.id === flightId);
    if (!flight) {
        return res.status(404).send({ message: 'Flight not found' });
    }
    res.status(200).send(flight);
};
const create = (req, res) => {
    const { origin, destination, price } = req.body;
    const newFlight = {
        id: flights.length + 1,
        origin,
        destination,
        price,
    };
    flights.push(newFlight);
    res.status(201).send(newFlight);
};
const remove = (req, res) => {
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
