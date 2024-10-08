import Appointment from '../models/Appointments.js';
import appointmentUtils from './appointmentUtils.js';
const getAllAppointments = async (req, res) => {
    const statusQuery = req.query.status;
    const doctorsNameQuery = req.query.doctorsName;
    //   const sort = req.query.sort;
    //   const order = req.query.order || 'asc';
    let appointments = await Appointment.find().populate('doctor');
    if (statusQuery) {
        appointments = appointmentUtils.filterByStatus(appointments, statusQuery);
    }
    if (doctorsNameQuery) {
        appointments = appointmentUtils.filterByStatus(appointments, statusQuery);
    }
    //   if (sort === 'date') {
    //     appointments = appointmentUtils.sortByDate(appointments, order);
    //   }
    res.send(appointments);
};
const createAppointment = async (req, res) => {
    const { patient, doctor, status } = req.body;
    const appointment = new Appointment({ patient, doctor, status });
    await appointment.save();
    res.status(201).send(appointment);
};
export default {
    getAllAppointments,
    createAppointment,
};
