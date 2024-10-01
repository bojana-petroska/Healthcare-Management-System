import { Router } from 'express';
import doctorsController from './doctorsController.js';

const router = Router();

router.get('/', doctorsController.getAllDoctors);
router.post('/', doctorsController.createDoctor);
router.post('/appointments', doctorsController.createAppointment);

export default router;
