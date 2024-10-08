import { Router } from 'express';
import patientsController from './patientController.js'

const router = Router();

router.get('/', patientsController.getAllPatients);
router.post('/', patientsController.createPatient);

export default router;

