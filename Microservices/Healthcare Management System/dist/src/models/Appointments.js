import mongoose, { Schema, model } from "mongoose";
const bookingSchema = new Schema({
    patient: {
        type: mongoose.Schema.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor: {
        type: mongoose.Schema.ObjectId,
        ref: 'Doctor',
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'confirmed', 'cancelled'],
        default: 'Pending'
    }
});
const Appointment = model('Appointment', bookingSchema);
export default Appointment;
