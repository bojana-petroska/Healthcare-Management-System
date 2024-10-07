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
});
const Patient = mongoose.model('Patient', patientSchema);
export default Patient;
