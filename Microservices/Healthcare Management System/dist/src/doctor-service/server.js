import express from 'express';
import router from './doctorRoutes.js';
import { AppDataSource } from '../database/ormconfig.js';
const app = express();
app.use(express.json());
const port = 3002;
const connectToSql = async () => {
    try {
        await AppDataSource.initialize();
        console.log('SQL database connected');
    }
    catch (err) {
        console.log('Error in connecting to the db', err);
    }
};
const startServer = async () => {
    await connectToSql();
    app.use('/doctors', router);
    app.listen(port, () => {
        console.log(`doctor's server is running on http://localhost:${port}`);
    });
};
startServer();
