import express from 'express';
import router from './flightRoutes.js';
import mongoose from 'mongoose';
const app = express();
const PORT = 3002;
app.use(express.json()); // Middleware to parse JSON bodies
// Use flight routes for handling '/flights' endpoint
// app.use(
//   (
//     err: ErrorRequestHandler,
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     res
//       .status(err.status || 500)
//       .send({ message: err.message || `something went wrong` });
//   }
// );
app.use('/flights', router);
mongoose
    .connect(`mongodb://localhost:27017/flights`)
    .then(() => {
    console.log(`connected to DB`);
})
    .catch((err) => {
    console.log(`error in connecting to the DB: ${err}`);
});
app.listen(PORT, () => {
    console.log(`the server for flights routes is open at port: http://localhost:${PORT}/flights`);
});
