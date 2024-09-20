import mongoose, { Schema, Document } from 'mongoose';

interface IFlight extends Document {
  id: number;
  origin: string;
  destination: string;
  price: number;
}

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

const Flight = mongoose.model<IFlight>('Flight', flightsSchema)

export default Flight;
