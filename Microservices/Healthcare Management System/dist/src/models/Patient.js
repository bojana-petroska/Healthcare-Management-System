import mongoose, { Schema } from "mongoose";
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
});
const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
