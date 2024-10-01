import express from 'express';
import router from './flightRoutes.js';
import mongoose from 'mongoose';

const app = express();
const PORT = 3002;

app.use(express.json()); 
app.use('/api/flights', router);

const connectDB = async () => {
  const mongoUri = `mongodb://localhost:27017/flights`;
  try {
    await mongoose.connect(mongoUri);
    console.log(`connected to DB`);
  } catch (err) {
    console.log(`error in connecting to the DB: ${err}`);
  }
};

export { app, connectDB };
