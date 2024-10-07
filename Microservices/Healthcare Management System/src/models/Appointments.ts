import mongoose, { Schema, model, Document } from "mongoose";

interface IAppontments extends Document {
    patient: string,
    doctor: string,
    status: String
}

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

const Appointment = model<IAppontments>('Appointment', bookingSchema);
export default Appointment;