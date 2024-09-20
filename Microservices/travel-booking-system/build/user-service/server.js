import express from 'express';
import router from './userRoutes.js';
import mongoose from 'mongoose';
const app = express();
const PORT = 3001;
app.use(express.json());
app.use('/users', router);
mongoose
    .connect(`mongodb://localhost:27017/flights`)
    .then(() => {
    console.log(`connected to DB`);
})
    .catch((err) => {
    console.log(`error in connecting to the DB: ${err}`);
});
app.listen(PORT, () => {
    console.log(`the server is open at port: http://localhost:${PORT}/users`);
});
