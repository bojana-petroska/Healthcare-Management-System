import express from 'express';
import router from './patientRoutes.js';
import mongoose from 'mongoose';
const app = express();
const PORT = 3001;
app.use(express.json());
app.use('/patients', router);
const connectDB = async () => {
    const mongoUri = `mongodb://localhost:27017/flights`;
    try {
        await mongoose.connect(mongoUri);
        console.log(`connected to DB`);
    }
    catch (err) {
        console.log(`error in connecting to the DB: ${err}`);
    }
};
const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Patient's server running on port http://localhost:${PORT}/patients`);
    });
};
startServer();
