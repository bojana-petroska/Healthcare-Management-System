import mongoose, { Schema, model } from 'mongoose';
const appointmentSchema = new Schema({
    patient: {
        type: mongoose.Schema.ObjectId,
        ref: 'Patient',
        required: true,
    },
    doctor: {
        type: mongoose.Schema.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'confirmed', 'cancelled'],
        default: 'Pending',
    },
    date: {
        type: Date,
        default: Date.now()
    }
});
const Appointment = model('Appointment', appointmentSchema);
export default Appointment;
