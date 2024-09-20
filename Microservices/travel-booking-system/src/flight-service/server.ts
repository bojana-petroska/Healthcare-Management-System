import express from 'express';
import router from './flightRoutes.js';
import mongoose from 'mongoose';

const app = express();
const PORT: number = 3002;

app.use(express.json()); // Middleware to parse JSON bodies

// Use flight routes for handling '/flights' endpoint
app.use('/flights', router);

mongoose
  .connect(
    `mongodb://localhost:27017/flights`
    // `mongodb+srv://testuser:test1234@education.bsck2.mongodb.net/?retryWrites=true&w=majority&appName=education`
  )
  .then(() => {
    console.log(`connected to DB`);
  })
  .catch((err) => {
    console.log(`error in connecting to the DB: ${err}`);
  });

app.listen(PORT, () => {
  console.log(
    `the server for flights routes is open at port: http://localhost:${PORT}`
  );
});
