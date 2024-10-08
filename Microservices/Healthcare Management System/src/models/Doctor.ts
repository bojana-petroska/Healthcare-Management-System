import mongoose, { Schema, Document } from 'mongoose';

interface IDoctor extends Document {
  id: number;
  name: string;
  lastName: string;
  specialty: string;
}

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
});

const Doctor = mongoose.model<IDoctor>('Doctor', doctorSchema);
export default Doctor;
