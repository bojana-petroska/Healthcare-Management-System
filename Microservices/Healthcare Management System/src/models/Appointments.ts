import mongoose, { Schema, model, Document } from 'mongoose';

interface IAppontments extends Document {
  id: number;
  patient: string;
  doctor: string;
  status: String;
}

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

const Appointment = model<IAppontments>('Appointment', appointmentSchema);
export default Appointment;
