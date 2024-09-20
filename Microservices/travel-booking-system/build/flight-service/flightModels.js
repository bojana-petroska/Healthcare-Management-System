import mongoose, { Schema } from 'mongoose';
const flightsSchema = new Schema({
    origin: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const Flight = mongoose.model('Flight', flightsSchema);
export default Flight;
