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
})

const Patient  = mongoose.model<IPatient>('Patient', patientSchema)
export default Patient;