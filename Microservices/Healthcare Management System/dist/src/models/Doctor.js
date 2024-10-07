import mongoose, { Schema } from 'mongoose';
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
const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
