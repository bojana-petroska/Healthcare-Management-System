import mongoose, {Schema, Document} from "mongoose";

interface IPatient extends Document {
    id: number;
    name: string;
    email: string;
}

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

const Patient  = mongoose.model<IPatient>('Patient', patientSchema)
export default Patient;